'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CustomRecipe.belongsTo(models.Recipe)
    }
  };
  CustomRecipe.init({
    custom_name: DataTypes.STRING,
    cooking_instructions: DataTypes.TEXT,
    RecipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CustomRecipe',
  });
  return CustomRecipe;
};