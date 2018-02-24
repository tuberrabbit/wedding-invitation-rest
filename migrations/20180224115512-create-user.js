'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('user', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, unique: true, primaryKey: true },
      name: { type: Sequelize.STRING(30), unique: true },
      phone: { type: Sequelize.INTEGER, unique: true },
      createdAt: { type: Sequelize.DATE, field: 'created_at' },
      updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('user');
  }
};
