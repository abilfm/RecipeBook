const express = require("express")
const Controller = require("../controllers/controllerRecipe")
const router = express.Router()
const {checkIsLogin} = require('../helpers/session')

router.get("/", Controller.recipesList)
router.get("/add", checkIsLogin, Controller.getAddRecipe)
router.post("/add", checkIsLogin, Controller.postAddRecipe)
router.get("/edit/:id", checkIsLogin, Controller.getEditRecipe)
router.post("/edit/:id", checkIsLogin, Controller.postEditRecipe)
router.get("/delete/:id", checkIsLogin, Controller.deleteRecipe)
router.get("/details/:id", checkIsLogin, Controller.detailRecipe)


module.exports = router