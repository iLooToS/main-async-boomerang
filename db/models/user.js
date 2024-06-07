const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Rating, Game }) {
      this.belongsTo(Rating, { foreignKey: 'rating_id' });
      this.hasMany(Game, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Ratings',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
