const { Recipe, Ingredient, RecipesIngredient } = require("../models")
const {translator, capitalize, sTranslator} = require("../helpers/textProcessor")

class Controller {
  static recipesList(req, res) {
    let lang
    let webData
    let test = {}
    if (!req.query.lang) {
      lang = 'en'
    }
    else {
      lang = req.query.lang
    }
    let data = {t_i_t_l_e: 'List of Recipe', l_i_n_k_1: 'Add New Recipe', t_h_e_a_d_1 : 'Name', t_h_e_a_d_2 : 'Cooking Time', t_h_e_a_d_3 : 'Servings', t_h_e_a_d_4 : 'Action' ,a_c_t_1 : 'Edit', a_c_t_2 : 'Delete', a_c_t_3 : 'Details'}
    translator(data, lang)
      .then(result => {
        // console.log(result, '<<<< RESULT');
        for (const item in result) {
          result[item] = capitalize(result[item])
        }
        // console.log(result, '<<<< RESULT');
        // res.render('register', {result})
        webData = result
        return Recipe.findAll()
      })
      .then(data => {
        res.render('listRecipes', {data, webData})
      })
      // .then(data => {
      //   console.log(data, '<<< RECIPE')
      //   console.log(data.map(el => el = JSON.stringify(el)).join(','));
      //   return sTranslator(data.map(el => el = JSON.stringify(el)).join(','), lang)
      // }).then(data => {
      //   // res.send(data)
      //   res.send(data)
      //   data = JSON.parse(data)
      //   res.render("listRecipes", { data, webData })
      // })
      .catch(err => {
        console.log(err);
        res.send(err)
      })


    // Recipe.findAll()
    // .then(data => {
    //   res.render("listRecipes", { data })
    // })
    // .catch(err => {
    //   res.send(err)
    // })
  }

  static getAddRecipe (req, res) {
    Ingredient.findAll()
      .then(data => {
        res.render("addRecipe", {data})
      })
      .catch(err => {
        err = err.errors.map(el => {
            return el.message
        })
        res.send(err)
      })
  }

  static postAddRecipe (req, res) {
    // res.send(req.body)
    let { name, cooking_time, servings, cooking_instructions, IngredientId } = req.body

    let array = []
    

    Recipe.create({ name, cooking_time, servings, cooking_instructions })
      .then(data => {
        IngredientId.forEach(el => {
          array.push({RecipeId: data.id, IngredientId: el})
        });
        return RecipesIngredient.bulkCreate(array)
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

  static getEditRecipe (req, res) {
    let result = {}
    Recipe.findByPk(
      req.params.id,
      { include :  Ingredient }
    )
		.then(data => {
      // res.send(data)
      result.recipe = data
      return Ingredient.findAll()
		})
    .then(data => {
      result.ingredient = data
      // res.send(result)
      res.render("editRecipe", {data:result})
    })
		.catch(err => {
			res.send(err)
		})
  }

  static postEditRecipe (req, res) {
    let { name, cooking_time, servings, cooking_instructions, ingredient_amount } = req.body

    res.send(req.body)

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
    Recipe.findByPk(req.params.id,
      { include :  Ingredient }
    )
		.then(data => {
      // res.send(data)
      res.render("detailRecipe", { data })
		})
		.catch(err => {
			res.send(err)
		})
  }
}

module.exports = Controller