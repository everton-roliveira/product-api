"use strict";
const TABLE_NAME = "categories_has_images";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(TABLE_NAME, {
			category_id: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false,
				defaultValue: Sequelize.UUIDV4
			},
			image_id: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false,
				defaultValue: Sequelize.UUIDV4
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: new Date()
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: new Date()
			}
		});
		await queryInterface.addConstraint(TABLE_NAME, {
			fields: [ "category_id", "image_id" ],
			type: "unique",
			name: `uk_${TABLE_NAME}__category_id__image_id`
		});
		await queryInterface.addConstraint(TABLE_NAME, {
			fields: [ "category_id" ],
			type: "foreign key",
			name: `fk_${TABLE_NAME}__category_id`,
			references: {
				table: "categories",
				field: "id"
			},
			onDelete: "cascade"
		});
		await queryInterface.addConstraint(TABLE_NAME, {
			fields: [ "image_id" ],
			type: "foreign key",
			name: `fk_${TABLE_NAME}__image_id`,
			references: {
				table: "images",
				field: "id"
			},
			onDelete: "cascade"
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable(TABLE_NAME);
	}
};
