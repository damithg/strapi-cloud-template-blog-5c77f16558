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

    // Return 404 if not found
    if (!entries || entries.length === 0) {
      return ctx.notFound("Experience not found");
    }

    const sanitized = await this.sanitizeOutput(entries[0], ctx);
    return this.transformResponse(sanitized);
  }
}));
