'use strict';

const BaseController = require('./base');

class UserController extends BaseController {
  async create() {
    const { user } = this.ctx.request.body;
    const openId = await this.service.user.getOpenId(this.ctx.header.authentication);
    if (!openId) {
      return this.returnData({ created: false });
    }
    await this.service.user.create(openId, user);
    return this.returnData({
      created: true
    });
  }

  async get() {
    const openId = await this.service.user.getOpenId(this.ctx.header.authentication);
    if (!openId) {
      return this.returnData({ user: null });
    }
    const user = await this.service.user.get(openId);
    return this.returnData({ user });
  }

  async update() {
    const openId = await this.service.user.getOpenId(this.ctx.header.authentication);
    if (!openId) {
      return this.returnData({ updated: false });
    }
    const { user } = this.ctx.request.body;
    await this.service.user.update(openId, user);
    return this.returnData({ updated: true });
  }

  async cert() {
    const { code } = this.ctx.query;
    const appId = this.config.appId;
    const appSecret = this.config.appSecret;
    const session = await this.service.user.cert(appId, appSecret, code);
    return this.returnData({ session });
  }
}

module.exports = UserController;
