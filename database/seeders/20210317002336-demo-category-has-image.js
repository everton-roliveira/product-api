"use strict";

const TABLE_NAME = "categories_has_images";
module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert(TABLE_NAME, [
			{
				category_id: "ed656083-375f-4ca5-8664-41479a6cf6b4",
				image_id: "684e6e22-9d06-405b-bfd8-4bde7973bff4"
			},
			{
				category_id: "931b1a90-e42a-4582-833d-cbba0220c761",
				image_id: "684e6e22-9d06-405b-bfd8-4bde7973bff4"
			}
		]);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete(TABLE_NAME, null, {});
	}
};
