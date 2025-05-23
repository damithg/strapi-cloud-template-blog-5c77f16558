'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::experience.experience', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const entries = await strapi.entityService.findMany('api::experience.experience', {
      filters: { slug },
      populate: {
        card: {
          populate: {
            image: true,
          },
        },
        galleryImage: true,
        seo: {
          populate: {
            metaImage: {
              fields: ['url', 'alternativeText', 'caption'],
            },
          },
        },
        highlights: true,
        inclusions: true,
        whatToBring: true,
        location: true,
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
      },
    });

    if (!entries || entries.length === 0) {
      return ctx.notFound("Experience not found");
    }

    ctx.body = {
      data: entries[0],
      meta: {},
    };
  }
}));
