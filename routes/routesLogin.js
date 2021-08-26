const express = require("express")
const Controller = require("../controllers/controllerLogIn")
const router = express.Router()

router.get("/", Controller.getLogin)
router.get("/?lang", Controller.getLogin)
router.post("/", Controller.postLogin)

module.exports = router
