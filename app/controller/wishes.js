'use strict';

const BaseController = require('./base');

class WishesController extends BaseController {
  async create() {
    const openId = await this.service.user.getOpenId(this.ctx.header.authentication);
    if (!openId) {
      return this.returnData({ created: false });
    }
    const { wishes } = this.ctx.request.body;
    await this.service.wishes.create(openId, wishes);
    return this.returnData({
      created: true
    });
  }

}

module.exports = WishesController;
