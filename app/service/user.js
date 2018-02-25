const BaseService = require('./base');

class UserService extends BaseService {
  async create(user) {
    const { User } = this.ctx.model;
    return await User.create({
      openId: user.openId,
      nickName: user.nickName,
      guest: user.guest,
      avatarUrl: user.avatarUrl,
    });
  }
}

module.exports = UserService;
