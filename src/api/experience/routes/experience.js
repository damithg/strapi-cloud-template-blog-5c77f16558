'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/experiences',
      handler: 'experience.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/experiences/:id',
      handler: 'experience.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/experiences',
      handler: 'experience.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/experiences/by-slug/:slug',
      handler: 'experience.findBySlug',
      config: {
        auth: false,
      },
    },
  ],
};
