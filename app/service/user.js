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

  async get(openId) {
    const { User } = this.ctx.model;
    return await User.find({
      where: { openId },
      attributes: ['openId', 'nickName', 'guest', 'avatarUrl', 'isAccept'],
    });
  }

  async update(openId, user) {
    const { User } = this.ctx.model;
    return await User.update({
      isAccept: user.isAccept,
    }, {
      where: { openId },
    });
  }
}

module.exports = UserService;
