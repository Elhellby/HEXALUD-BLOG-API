const { Sequelize } = require('sequelize');
const configuration = require("../utils/configurations")

const sequelize = new Sequelize(
    configuration.getKey('SQL_DATABASE'),
    configuration.getKey('SQL_USER'),
    configuration.getKey('SQL_PASSWORD'), {
    host: configuration.getKey('SQL_SERVER'),
    dialect: 'mssql',
});

module.exports = sequelize;