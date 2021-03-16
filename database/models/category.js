"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Category extends Model {

		static associate(models) {
			const {category} = models;
			category.belongsTo(category, {
				sourceKey: "id",
				foreignKey: "category_id", as: "categoryId"
			});
		}
	}
	Category.init({
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		description: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		categoryId: {
			type: DataTypes.UUID,
			allowNull: true
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
		modelName: "category",
	});
	return Category;
};
