'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "CustomRecipes",
      "RecipeId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Recipes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("CustomRecipes", "RecipeId")
  }
};
