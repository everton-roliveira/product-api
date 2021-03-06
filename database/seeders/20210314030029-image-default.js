"use strict";

const TABLE_NAME = "images";
module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert(TABLE_NAME, [ {
			id: "684e6e22-9d06-405b-bfd8-4bde7973bff4",
			description: "image default",
			path: "/home/dell/Documentos/cursos/product-api/public/images/no-image.jpg",
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete(TABLE_NAME, null, {});
	}
};
