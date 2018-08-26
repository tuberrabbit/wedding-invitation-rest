const BaseService = require('./base');

class WishesService extends BaseService {
  async create(name, wishes) {
    const { Wishes } = this.ctx.model;
    return Wishes.create({
      name,
      wishes,
    });
  }
}

module.exports = WishesService;
