'use strict';
const fs = require("fs");

module.exports = {
  up: (queryInterface, Sequelize) => {
     let data = JSON.parse(fs.readFileSync("./seeders/recipes.json", "utf-8"))
     data.forEach(element => {
       element.createdAt = new Date()
       element.updatedAt = new Date()
     });
 
     return queryInterface.bulkInsert("Recipes", data, {})
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete("Recipes", null, {})
  }
};