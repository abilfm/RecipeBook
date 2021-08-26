'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipesIngredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RecipesIngredient.init({
    RecipeId: DataTypes.INTEGER,
    IngredientId: DataTypes.INTEGER,
    ingredient_amount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RecipesIngredient',
  });
  return RecipesIngredient;
};