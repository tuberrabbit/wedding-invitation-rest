'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;
  router.get('/', 'home.index');
  router.patch('/user', 'user.update');
  router.post('/wishes', 'wishes.create');
};
