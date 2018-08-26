'use strict';

const BaseController = require('./base');

class UserController extends BaseController {
  async update() {
    const { name, isAccept } = this.ctx.request.body;
    await this.service.user.update(name. isAccept);
    return this.returnData({ updated: true });
  }
}

module.exports = UserController;
