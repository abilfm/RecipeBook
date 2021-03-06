const { Recipe, Ingredient } = require("../models")

class Controller {
  static recipesList(req, res) {
    Recipe.findAll()
    .then(data => {
      res.render("listRecipes", { data })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static getAddRecipe (req, res) {
    res.render("addRecipe")
  }

  static postAddRecipe (req, res) {
    let { name, cooking_time, servings, cooking_instructions } = req.body

    Recipe.create({ name, cooking_time, servings, cooking_instructions })
      .then(_ => {
        res.redirect("/recipes")
      })
      .catch(err => {
        err = err.errors.map(el => {
            return el.message
        })
        res.send(err)
      })
  }

  static getEditRecipe (req, res) {
    Recipe.findByPk(
      req.params.id,
    )
		.then(data => {
      res.render("editRecipe", {data})
		})
		.catch(err => {
			res.send(err)
		})
    
  }

  static postEditRecipe (req, res) {
    let { name, cooking_time, servings, cooking_instructions } = req.body

    Recipe.update(
      { name, cooking_time, servings, cooking_instructions },
      { where : { id : req.params.id }
    })
      .then(_ => {
        res.redirect("/recipes")
      })
      .catch(err => {
        err = err.errors.map(el => {
            return el.message
        })
        res.send(err)
      })
  }

  static deleteRecipe (req, res) {
    Recipe.destroy({
			where : { id : req.params.id }
		}) 
		.then( _ => {
			res.redirect("/recipes")
		})
		.catch(err => {
			res.send(err)
		})
  }

  static detailRecipe (req, res) {
    Recipe.findOne(
      { where : { id : req.params.id } },
      { include :  Ingredient }
    )
		.then(data => {
      res.render("detailRecipe", { data })
		})
		.catch(err => {
			res.send(err)
		})
    
  }
}

module.exports = Controller