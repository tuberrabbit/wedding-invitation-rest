'use strict';

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519448952487_6520';

  // add your config here
  config.middleware = [];

  return config;
};
