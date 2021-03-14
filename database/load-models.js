const fs = require("fs");
const path = require("path");
const models = {};
const loadModels = (connection, Sequelize) => {
	const dir = __dirname + "/../databases/models";
	fs
		.readdirSync(dir)
		.filter(file => file.endsWith(".js"))
		.map(file => {
			const model = require(path.join(dir, file))(connection, Sequelize.DataTypes);
			models[model.name] = model;
			return model;
		}).forEach(model => {
			if ("associate" in model) model.associate(models);
		});
	return models;
};

module.exports = loadModels;
