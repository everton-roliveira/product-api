"use strict";

const TABLE_NAME = "brands";
module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert(TABLE_NAME, [
			{
				id: "3db86364-a283-46f7-b226-b6591838d885",
				name: "Brand Test",
				isActive: true,
				image_id: "684e6e22-9d06-405b-bfd8-4bde7973bff4",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: "b4f78b9e-a3b9-47f1-8ee0-4aaeefef2e8c",
				name: "Brand Test 2",
				isActive: true,
				image_id: "684e6e22-9d06-405b-bfd8-4bde7973bff4",
				createdAt: new Date(),
				updatedAt: new Date()
			},
		], {});
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete(TABLE_NAME, null, {});
	}
};
