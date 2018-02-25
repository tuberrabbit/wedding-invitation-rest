'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('user', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, unique: true, primaryKey: true },
      openId: { type: Sequelize.STRING, unique: true, allowNull: false, field: 'open_id' },
      nickName: { type: Sequelize.STRING, field: 'nick_name' },
      guest: { type: Sequelize.STRING },
      avatarUrl: { type: Sequelize.STRING, field: 'avatar_url' },
      isAccept: { type: Sequelize.BOOLEAN, field: 'is_accept' },
      createdAt: { type: Sequelize.DATE, field: 'created_at' },
      updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('user');
  }
};
