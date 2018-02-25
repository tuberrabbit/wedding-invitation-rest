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
    define: {
      freezeTableName: true,
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.appId = 'wx3c078cd53a7ee056';
  config.appSecret = '8b75b468cac6ba11d8218b53f8b54feb'

  return config;
};
