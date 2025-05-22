'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::experience.experience', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entities = await strapi.entityService.findMany('api::experience.experience', {
      ...query,
      populate: {
        card: {
          populate: { image: true },
        },
        galleryImage: true,
        seo: {
          populate: {
            metaImage: {
              fields: ['url', 'alternativeText', 'caption'],
            },
          },
        },
        relatedExperiences: {
          populate: {
            card: { populate: { image: true } },
            galleryImage: true,
            seo: {
              populate: {
                metaImage: {
                  fields: ['url', 'alternativeText', 'caption'],
                },
              },
            },
            highlights: true
          },
        },
      },
    });

    const sanitized = await this.sanitizeOutput(entities, ctx);
    return this.transformResponse(sanitized);
  }
}));
