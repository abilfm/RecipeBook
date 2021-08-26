'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.hasMany(models.CustomRecipe)
      Recipe.belongsToMany(models.Ingredient, { through: "RecipesIngredient" })
    }
  };
  Recipe.init({
    name: DataTypes.STRING,
    cooking_time: DataTypes.INTEGER,
    servings: DataTypes.INTEGER,
    cooking_instructions: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};