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

  async get() {
    const { openId } = this.ctx.params;
    const user = await this.service.user.get(openId);
    return this.returnData({ user });
  }
}

module.exports = UserController;
