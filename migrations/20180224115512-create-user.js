'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('user', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, unique: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      isAccept: { type: Sequelize.BOOLEAN, field: 'is_accept' },
      createdAt: { type: Sequelize.DATE, field: 'created_at' },
      updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('user');
  }
};
