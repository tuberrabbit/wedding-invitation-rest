'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;
  router.get('/', 'home.index');
  router.get('/user/:openId', 'user.get');
  router.post('/user', 'user.create');
  router.patch('/user/:openId', 'user.update');
};
