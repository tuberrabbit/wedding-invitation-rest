const BaseService = require('./base');

class WishesService extends BaseService {
  async create(openId, wishes) {
    const { Wishes } = this.ctx.model;
    return await Wishes.create({
      openId,
      content: wishes.content,
    });
  }

}

module.exports = WishesService;
