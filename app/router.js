'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;
  router.get('/', 'home.index');
  router.get('/user/cert', 'user.cert');
  router.get('/user', 'user.get');
  router.post('/user', 'user.create');
  router.patch('/user', 'user.update');
  router.post('/wishes', 'wishes.create');
};
