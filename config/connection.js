const { Sequelize } = require('sequelize');
const sequelize = require ('sequelize');

const db = new Sequelize(process. env.DB_NAM, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql', 
    port: 3500
});

module.exports = sequelize;