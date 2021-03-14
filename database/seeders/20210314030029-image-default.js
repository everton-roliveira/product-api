'use strict';
const { v4: uuidv4 } = require("uuid")

const TABLE_NAME = "images"
module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert(TABLE_NAME, [{
			id: uuidv4(),
			description: "image default",
			path: "/home/dell/Documentos/cursos/product-api/public/images/no-image.jpg",
			createdAt: new Date(),
			updatedAt: new Date()
		}], {})
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete(TABLE_NAME, null, {})
	}
};
