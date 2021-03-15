"use strict";
const TABLE_NAME = "brands";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(TABLE_NAME, {
			id: {
				type: Sequelize.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4
			},
			name: {
				type: Sequelize.STRING(50),
				allowNull: false
			},
			isActive: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			image_id: {
				type: Sequelize.UUID,
				allowNull: false
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW
			}
		});
		await queryInterface.addConstraint(TABLE_NAME,
			{
				fields: [ "id" ],
				type: "unique",
				name: `uk_${TABLE_NAME}__id`
			},
		);
		await queryInterface.addConstraint(TABLE_NAME,
			{
				fields: [ "name" ],
				type: "unique",
				name: `uk_${TABLE_NAME}__name`
			},
		);
		await queryInterface.addConstraint(TABLE_NAME, {
			fields: [ "image_id" ],
			type: "foreign key",
			name: `fk_${TABLE_NAME}__image_id`,
			references: {
				table: "images",
				field: "id"
			}
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable(TABLE_NAME);
	}
};
