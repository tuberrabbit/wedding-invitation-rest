'use strict';

const BaseController = require('./base');

class WishesController extends BaseController {
  async create() {
    const { wishes } = this.ctx.request.body;
    await this.service.wishes.create(wishes);
    return this.returnData({
      created: true
    });
  }

}

module.exports = WishesController;
