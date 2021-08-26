const express = require("express")
const Controller = require("../controllers/controllerSignUp")
const router = express.Router()

router.get("/", Controller.getRegister)
router.get("/?lang", Controller.getRegister)
router.post("/", Controller.postRegister)

module.exports = router
