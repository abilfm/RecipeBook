const { User } = require("../models")

class Controller {
  static getRegister (req, res) {
      res.render("register")
  }
  
  static postRegister (req, res) {
    const objRegister = {
        username : req.body.username,
        password : req.body.password,
    }

    User.create(objRegister) 
      .then( _ => {
          res.redirect("/login")
      })
      .catch(err => {
          res.send(err)
      })
  }
}

module.exports = Controller