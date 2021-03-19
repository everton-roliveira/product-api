"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Brand extends Model {
		static associate(models) {
			const {brand, image} = models;
			brand.belongsTo(image, {
				sourceKey: "id",
				foreignKey: "image_id",
			});
		}
	}
	Brand.init({
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false,
			defaultValue: DataTypes.UUIDV4
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		imageId: {
			type: DataTypes.UUID,
			allowNull: false,
			field: "image_id"
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: new Date()
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: new Date()
		}
	}, {
		sequelize,
		modelName: "brand",
	});
	return Brand;
};
