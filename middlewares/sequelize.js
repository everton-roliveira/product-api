"use strict";
const Sequelize = require("sequelize");
const connection = require("../database/connection");
const loadModels = require("../database/load-models");

module.exports = function SequelizeDbMiddleware () {
	let models;
	return {
		name: "Sequelize",
		created () {
			try {
				this.logger.info("Sequelize middleware ready");
				models = loadModels(connection, Sequelize);
				this.logger.info("Sequelize all models loaded!");
			} catch (error) {
				this.logger.error("Middleware Error", error);
			}
		},

		async stopping () {
			this.logger.info("Stopping!");
			if (connection) await connection.close();
		},

		serviceCreating (service, schema) {
			if (!schema.name.startsWith("$")) {
				service.Sequelize = connection;
				service.Sequelize.Op = Sequelize.Op;
				service.models = models;
			}
		}
	};
};
