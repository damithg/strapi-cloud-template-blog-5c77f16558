'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::experience.experience', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const entries = await strapi.entityService.findMany('api::experience.experience', {
      filters: { slug },
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
            highlights: true,
          },
        },
        location: true,
        highlights: true,
        inclusions: true,
        whatToBring: true
      },
    });

    const sanitized = await this.sanitizeOutput(entries[0], ctx);
    return this.transformResponse(sanitized);
  },
}));
