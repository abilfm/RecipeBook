const { User } = require("../models")

class Controller {
  static getLogin (req, res) {
      res.render("login")
  }
  
  static postLogin (req, res) {
    User.findOne({
      where :  {
        username : req.body.username, 
        password : req.body.password
      }
    }) 
      .then( _ => {
        res.redirect("/")
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = Controller