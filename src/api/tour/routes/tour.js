'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/tours',
      handler: 'tour.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/tours',
      handler: 'tour.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/tours/:id',
      handler: 'tour.findOne',
      config: {
        auth: false,
      },
    },
  ],
};
