const express = require("express")
const Controller = require("../controllers/controllerIngredients")
const router = express.Router()

router.get("/", Controller.ingredientsList)
router.post("/", Controller.findRecipeList)

module.exports = router