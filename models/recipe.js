'use strict';
const {
  Model
} = require('sequelize');
const {translator, capitalize} = require("../helpers/textProcessor")
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

    formatCookingTime() {
      return `${this.cooking_time} minutes`
    }

    // translate(text, lang) {
    //   translator(text, lang)
    //     .then(data => {
    //       return data
    //     })
    //     .catch(err => {
    //       return err
    //     })
    // }

  };
  Recipe.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Name is required"
        }
      }
    },
    cooking_time: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Cooking Time is required"
        }
      }
    },
    servings: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Servings is required"
        }
      }
    },
    cooking_instructions: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          msg: "Cooking Instructions can not be emptied"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};