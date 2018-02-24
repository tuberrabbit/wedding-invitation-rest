module.exports = app => {
  const Sequelize = app.Sequelize;

  const schema = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, unique: true, primaryKey: true },
    name: { type: Sequelize.STRING(30), unique: true },
    phone: { type: Sequelize.INTEGER, unique: true },
    createdAt: { type: Sequelize.DATE, field: 'created_at' },
    updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
  };

  const schemaOption = {};

  const User = app.model.define('user', schema);

  return User;
};
