"use strict";

const TABLE_NAME = "categories";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(TABLE_NAME, {
			id: {
				type: Sequelize.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4
			},
			description: {
				type: Sequelize.STRING(50),
				allowNull: false
			},
			category_id: {
				type: Sequelize.UUID,
				allowNull: true
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
			fields: [ "id" ],
			type: "unique",
			name: `uk_${TABLE_NAME}__id`
		});
		await queryInterface.addConstraint(TABLE_NAME, {
			fields: [ "description", "category_id" ],
			type: "unique",
			name: `uk_${TABLE_NAME}__description__category_id`
		});
		await queryInterface.addConstraint(TABLE_NAME, {
			fields: [ "id" ],
			type: "foreign key",
			name: `fk_${TABLE_NAME}__category_id`,
			references: {
				table: TABLE_NAME,
				field: "id"
			},
			onDelete: "cascade"
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable(TABLE_NAME);
	}
};
