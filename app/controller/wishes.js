'use strict';

const BaseController = require('./base');

class WishesController extends BaseController {
  async create() {
    const { name, wishes } = this.ctx.request.body;
    await this.service.wishes.create(name, wishes);
    return this.returnData({
      created: true
    });
  }

}

module.exports = WishesController;
