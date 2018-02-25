'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('wishes', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, unique: true, primaryKey: true },
      openId: { type: Sequelize.STRING, allowNull: false, field: 'open_id' },
      content: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, field: 'created_at' },
      updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('wishes');
  }
};
