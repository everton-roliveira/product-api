"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Image extends Model { }
	Image.init({
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false,
			defaultValue: DataTypes.UUIDV4
		},
		description: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		path: {
			type: DataTypes.STRING(200),
			allowNull: false,
			unique: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
		}
	}, {
		sequelize,
		modelName: "Image",
	});
	return Image;
};
