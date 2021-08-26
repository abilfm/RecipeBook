const express = require('express')
const router = express.Router()

const signUpRoute = require("./routesSignUp")
const logInRoute = require("./routesLogin")
const recipeRoute = require("./routesRecipe")
const ingredientsRoute = require("./routesIngredients")

router.get("/", (req, res) => {
  res.render("home")
})

router.use("/register", signUpRoute)
router.use("/login", logInRoute)
router.use("/recipes", recipeRoute)
router.use("/ingredients", ingredientsRoute)


module.exports = router