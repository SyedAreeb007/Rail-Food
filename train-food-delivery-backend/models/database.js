const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('train_food_delivery', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;