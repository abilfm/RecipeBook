const express = require("express")
const Controller = require("../controllers/controllerRecipe")
const router = express.Router()

router.get("/", Controller.recipesList)
router.get("/add", Controller.getAddRecipe)
router.post("/add", Controller.postAddRecipe)
router.get("/edit/:id", Controller.getEditRecipe)
router.post("/edit/:id", Controller.postEditRecipe)
router.get("/delete/:id", Controller.deleteRecipe)
router.get("/details/:id", Controller.detailRecipe)


module.exports = router