const express = require('express');
const path = require('path');
const cors = require('cors');
const { Pool } = require('pg'); // PostgreSQL client library

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

// PostgreSQL configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'train_food_delivery',
    password: '1234',
    port: 5432, // Default PostgreSQL port
});

// Create stations and restaurants tables in PostgreSQL
pool.query(`
    CREATE TABLE IF NOT EXISTS stations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
    )
`).then(() => {
    console.log('Stations table created successfully');
}).catch(err => {
    console.error('Error creating stations table:', err);
});

pool.query(`
    CREATE TABLE IF NOT EXISTS restaurants (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        image_url TEXT NOT NULL,
        station_id INTEGER REFERENCES stations(id)
    )
`).then(() => {
    console.log('Restaurants table created successfully');
}).catch(err => {
    console.error('Error creating restaurants table:', err);
});

// Endpoint to insert restaurant data into PostgreSQL
app.post('/restaurants', async (req, res) => {
    const { name, image_url, station_id } = req.body;

    try {
        const query = 'INSERT INTO restaurants (name, image_url, station_id) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, image_url, station_id];

        const result = await pool.query(query, values);
        res.json({ success: true, restaurant: result.rows[0] });
    } catch (error) {
        console.error('Error inserting restaurant:', error);
        res.status(500).json({ success: false, error: 'Error inserting restaurant' });
    }
});

// Endpoint to fetch restaurants by station
app.get('/restaurants', async (req, res) => {
    const { station } = req.query;

    try {
        const stationResult = await pool.query('SELECT id FROM stations WHERE name = $1', [station]);

        if (stationResult.rows.length === 0) {
            return res.status(404).json({ error: 'Station not found' });
        }

        const stationId = stationResult.rows[0].id;
        const restaurantResult = await pool.query('SELECT * FROM restaurants WHERE station_id = $1', [stationId]);

        res.json({ restaurants: restaurantResult.rows });
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ error: 'Error fetching restaurants' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});