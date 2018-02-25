'use strict';

const BaseController = require('./base');

class UserController extends BaseController {
  async create() {
    const { user } = this.ctx.request.body;
    await this.service.user.create(user);
    return this.returnData({
      created: true
    });
  }
}

module.exports = UserController;
