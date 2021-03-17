"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class categoryHasImage extends Model {
		static associate(models) {
			const {category, image, categoryHasImage} = models;
			category.belongToMany(image, {
				through: {
					model: categoryHasImage,
					unique: false
				},
				sourceKey: "id",
				foreignKey: "image_id", as: "imageId"
			});
			image.belongToMany(category, {
				through: {
					model: categoryHasImage,
					unique: false,
					scope: {
						taggable: "image"
					}
				},
				sourceKey: "id",
				foreignKey: "category_id", as: "categoryId"
			});
		}
	}
	categoryHasImage.init({
		categoryId: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false,
			defaultValue: DataTypes.UUIDV4
		},
		imageId: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false,
			defaultValue: DataTypes.UUIDV4
		}
	}, {
		sequelize,
		modelName: "categoryHasImage",
	});
	return categoryHasImage;
};
