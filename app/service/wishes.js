const BaseService = require('./base');

class WishesService extends BaseService {
  async create(wishes) {
    const { Wishes } = this.ctx.model;
    return await Wishes.create({
      openId: wishes.openId,
      content: wishes.content,
    });
  }

}

module.exports = WishesService;
