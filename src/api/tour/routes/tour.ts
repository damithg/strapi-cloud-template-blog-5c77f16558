export default {
    routes: [
      {
        method: 'GET',
        path: '/tours',
        handler: 'tour.find',
        config: {
          policies: [],
          auth: false, // Set to true if you want token/authentication
        },
      },
      {
        method: 'GET',
        path: '/tours/:id',
        handler: 'tour.findOne',
        config: {
          policies: [],
          auth: false,
        },
      },
      {
        method: 'POST',
        path: '/tours',
        handler: 'tour.create',
        config: {
          policies: [],
          auth: false, // 🔒 You can protect this with a token later
        },
      },
    ],
  };
  