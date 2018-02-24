'use strict';

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519448952487_6520';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'postgres',
    database: 'wedding_invitation',
    host: '101.132.181.121',
    port: '10081',
    username: 'tuber',
    password: 'ZJ5dG04Nkz743YPn',
  };
  return config;
};
