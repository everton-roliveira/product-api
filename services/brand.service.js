const ResponseMixin = require("../mixins/response.mixin");
module.exports = {
	name: "brand",
	mixins: [ ResponseMixin ],
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
					offset
				})
					.then(response => this.getPagingData(response, page, limit))
					.catch(err => console.log(err));
			}
		}
	}
};
