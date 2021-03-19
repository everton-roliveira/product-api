module.exports = {
	name: "brand",
	mixins: [],
	settings: {
	},
	actions: {
		listAll: {
			handler(ctx) {
				return this.findAll(ctx.params.page, ctx.params.pageSize);
			}
		}
	},
	methods: {
		findAll: {
			handler(page, size) {
				const { offset, limit } = this.getPagination(page, size);
				return this.models.brand.findAndCountAll({
					where: null,
					limit,
					offset,
					order: [
						[ "createdAt", "ASC" ]
					]
				})
					.then(response => this.getPagingData(response, page, limit))
					.catch(err => console.log(err));
			}
		},
		getPagination:{
			handler(page, size) {
				const limit = size ? +size : 10;
				const offset = page ? (page - 1) * limit : 0;

				return { limit, offset };
			}
		},
		getPagingData: {
			handler(response, page, limit) {
				const { count: totalItems, rows: data } = response;
				const currentPage = page ? +page : 0;
				const totalPages = Math.ceil(totalItems / limit);

				return { data, totalItems, totalPages, currentPage };
			}
		}
	}
};
