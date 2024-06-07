const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.hasMany(User, { foreignKey: 'rating_id' });
    }
  }
  Rating.init(
    {
      score: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Rating',
    },
  );
  return Rating;
};
