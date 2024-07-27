const { Pool } = require('pg');

// PostgreSQL configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'train_food_delivery',
    password: '1234',
    port: 5432, // Default PostgreSQL port
});

// Function to create tables if they don't exist
const createTables = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS stations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL
        )
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS restaurants (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            image_url TEXT NOT NULL,
            station_id INTEGER REFERENCES stations(id)
        )
    `);
};

const seedDatabase = async () => {
    try {
        // Create tables
        await createTables();

        // Insert stations
        const stations = ['Sukkur', 'Karachi', 'Lahore'];
        for (const station of stations) {
            await pool.query('INSERT INTO stations (name) VALUES ($1) ON CONFLICT (name) DO NOTHING', [station]);
        }

        // Insert restaurants
        const stationIds = await pool.query('SELECT id, name FROM stations');
        const stationIdMap = {};
        stationIds.rows.forEach(station => {
            stationIdMap[station.name] = station.id;
        });

        const restaurants = [
            { name: 'Piato Bakery', image_url: '/images/r1.png', station_id: stationIdMap['Sukkur'] },
            { name: 'Mehran Haleem', image_url: '/images/r2.png', station_id: stationIdMap['Sukkur'] },
            { name: 'Ghousia Biryani', image_url: '/images/r3.png', station_id: stationIdMap['Sukkur'] },
            { name: 'Pizza Palace', image_url: '/images/r4.png', station_id: stationIdMap['Karachi'] },
            { name: 'Pizza On', image_url: '/images/r5.png', station_id: stationIdMap['Karachi'] },
            { name: 'Shikarpur Sweets', image_url: '/images/r6.png', station_id: stationIdMap['Karachi'] },
            { name: 'Kfc ', image_url: '/images/r7.png', station_id: stationIdMap['Lahore'] },
            { name: 'Lasani food', image_url: '/images/r8.png', station_id: stationIdMap['Lahore'] },
            { name: 'Mirch Masala', image_url: '/images/r9.png', station_id: stationIdMap['Lahore'] },
        ];

        for (const restaurant of restaurants) {
            await pool.query(
                'INSERT INTO restaurants (name, image_url, station_id) VALUES ($1, $2, $3)',
                [restaurant.name, restaurant.image_url, restaurant.station_id]
            );
        }

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        pool.end();
    }
};

// Call the seed function
seedDatabase();