'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  returnData(data) {
    this.ctx.body = data;
    this.ctx.status = 200;
  }
}

module.exports = BaseController;
