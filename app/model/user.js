module.exports = app => {
  const Sequelize = app.Sequelize;

  const schema = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, unique: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    isAccept: { type: Sequelize.BOOLEAN, field: 'is_accept' },
    createdAt: { type: Sequelize.DATE, field: 'created_at' },
    updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
  };

  const User = app.model.define('user', schema);

  return User;
};
