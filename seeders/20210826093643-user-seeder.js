'use strict';
const fs = require("fs");

module.exports = {
  up: (queryInterface, Sequelize) => {
     let data = JSON.parse(fs.readFileSync("./seeders/users.json", "utf-8"))
     data.forEach(element => {
       element.createdAt = new Date()
       element.updatedAt = new Date()
     });
 
     return queryInterface.bulkInsert("Users", data, {})
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete("Users", null, {})
  }
};