module.exports = app => {
  const Sequelize = app.Sequelize;

  const schema = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, unique: true, primaryKey: true },
    openId: { type: Sequelize.STRING, unique: true, allowNull: false, field: 'open_id' },
    content: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.DATE, field: 'created_at' },
    updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
  };

  const schemaOption = {};

  const Wishes = app.model.define('wishes', schema);

  return Wishes;
};
