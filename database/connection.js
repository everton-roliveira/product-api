const Sequelize = require("sequelize");
const config = require("../database/config");
const connection = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	port: config.port,
	dialect: config.dialect
});

module.exports = connection;
