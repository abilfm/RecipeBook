const { User } = require("../models")
const { checkPassword } = require('../helpers/bcrypt')

class Controller {
  static getLogin (req, res) {
      res.render("login")
  }
  
  static postLogin (req, res) {
    let data = req.body
    User.findOne({
      where: { username: data.username }
    })
      .then(result => {
        if (result) {
          let isCorrect = checkPassword(data.password, result.password)
          if (isCorrect) {
            req.session.isLogin = true
            req.session.username = data.username
            req.session.role = data.role
            // console.log(req.session, '<<<< SESSION');
            res.redirect('/')
          }
          else {
            res.send('Login failed')
          }
        }
        else {
          res.send('No such user')
        }
      })
      .catch(error => {
        res.send(error)
      })
  }
}

module.exports = Controller