const BaseService = require('./base');

class UserService extends BaseService {
  async update(name, isAccept) {
    const { User } = this.ctx.model;
    return User.update({
      isAccept,
    }, {
      where: { name },
    });
  }
}

module.exports = UserService;
