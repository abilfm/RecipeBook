const { Ingredient, Recipe } = require("../models")

class Controller {
  static ingredientsList(req, res) {
    Ingredient.findAll()
    .then(data => {
      res.render("listIngredients", { data })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static findRecipeList(req, res) {
    Recipe.findAll({
      where : {
        IngredientId : req.params.IngredientId
      }
    })
    .then(data => {
      res.redirect("/recipes")
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Controller