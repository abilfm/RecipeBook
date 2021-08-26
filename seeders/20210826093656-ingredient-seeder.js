'use strict';
const fs = require("fs");

module.exports = {
  up: (queryInterface, Sequelize) => {
     let data = JSON.parse(fs.readFileSync("./seeders/ingredients.json", "utf-8"))
     data.forEach(element => {
       element.createdAt = new Date()
       element.updatedAt = new Date()
     });
 
     return queryInterface.bulkInsert("Ingredients", data, {})
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete("Ingredients", null, {})
  }
};