const BaseService = require('./base');

const memoryCache = {};

class UserService extends BaseService {
  async create(openId, user) {
    const { User } = this.ctx.model;
    return await User.create({
      openId,
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

  async cert(appid, secret, js_code) {
    const res = await this.ctx.curl(`https://api.weixin.qq.com/sns/jscode2session`, {
      data: { appid, secret, js_code, grant_type: 'authorization_code' },
      dataType: 'json',
    });
    console.log(res.data);
    const { openid = 'openId', session_key = 'sessionKey' } = res.data;
    const key = `session_${Date.now()}`;
    const timeout = Date.now() + 2 * 60 * 60 * 1000;
    memoryCache[key] = {
      openId: openid,
      sessionKey: session_key,
      timeout,
    };
    return key;
  }

  async getOpenId(key) {
    return memoryCache[key] && memoryCache[key].timeout >= Date.now() ? memoryCache[key].openId : null;
  }
}

module.exports = UserService;
