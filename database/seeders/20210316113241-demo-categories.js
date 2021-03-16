"use strict";

const TABLE_NAME = "categories";
module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert(TABLE_NAME, [
			{
				id: "ed656083-375f-4ca5-8664-41479a6cf6b4",
				description: "Parent Category"
			},
			{
				id: "bd387459-eef3-4612-82d4-b1b5e71c2bf4",
				description: "Category 1",
				category_id: "ed656083-375f-4ca5-8664-41479a6cf6b4"
			},
			{
				id: "931b1a90-e42a-4582-833d-cbba0220c761",
				description: "Category 2",
				category_id: "ed656083-375f-4ca5-8664-41479a6cf6b4"
			},
			{
				id: "98d6259b-78f1-48cf-bfc7-f1b14f7f709c",
				description: "Category 2 Child",
				category_id: "931b1a90-e42a-4582-833d-cbba0220c761"
			}
		]);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete(TABLE_NAME, null, {});
	}
};
