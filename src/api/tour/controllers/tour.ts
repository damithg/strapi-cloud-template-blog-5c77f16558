export default ({ strapi }) => ({
    async find(ctx) {
        return await strapi.entityService.findMany('api::tour.tour', ctx.query);
    },

    async findOne(ctx) {
        const { id } = ctx.params;
        return await strapi.entityService.findOne('api::tour.tour', id, ctx.query);
    },

    async create(ctx) {
        const { body } = ctx.request;
        return await strapi.entityService.create('api::tour.tour', {
            data: body,
        });
    },
});
