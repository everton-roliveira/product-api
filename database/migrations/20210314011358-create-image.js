'use strict';

const TABLE_NAME = "images";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(TABLE_NAME, {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false,
				unique: true,
				defaultValue: Sequelize.UUIDV4
			},
			description: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			path: {
				type: Sequelize.STRING(200),
				allowNull: false,
				unique: true
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
		await queryInterface.addConstraint(TABLE_NAME, {
			fields: ['description', 'path'],
			type: 'unique',
			name: `uk_${TABLE_NAME}__description__path`
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable(TABLE_NAME);
	}
};
