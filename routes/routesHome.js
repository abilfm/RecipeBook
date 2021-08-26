const express = require('express')
const router = express.Router()

const signUpRoute = require("./routesSignUp")
const logInRoute = require("./routesLogin")
const recipeRoute = require("./routesRecipe")
const ingredientsRoute = require("./routesIngredients")
const routesLogout = require("./routesLogout")
const Controller = require('../controllers/controllerHome')

router.get("/", Controller.home)
router.get("/?lang", Controller.home)

router.use("/register", signUpRoute)
router.use("/login", logInRoute)
router.use("/recipes", recipeRoute)
router.use("/ingredients", ingredientsRoute)
router.use("/logout", routesLogout)


module.exports = router