const { User } = require('../models')
const { hashPassword, checkPassword } = require('../helpers/bcrypt')

class Controller {
  static home(req, res) {
    res.send('HOME')
  }

  static registerGet(req, res) {
    res.render('./register.ejs')
  }

  static registerPost(req, res) {
    let data = req.body
    // res.send(data)
    User.create(data)
      .then(data => {
        // res.send(data)
        res.redirect('/login')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static loginGet(req, res) {
    res.render('./login.ejs')
  }

  static loginPost(req, res) {
    let data = req.body
    // res.send(data)
    User.findOne({
      where: { username: data.username }
    })
      .then(result => {
        console.log(result, '<<<< RESULT');
        if (result) {
          let isCorrect = checkPassword(data.password, result.password)

          if (isCorrect) {
            console.log('HEREE')
            req.session.isLogin = true
            req.session.username = data.username
            req.session.role = data.role
            console.log(req.session, '<<<< SESSION');
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

  static recipeList(req, res) {
    res.send('Recipe List')
  }

  static logout(req, res) {
    req.session.destroy()
      .then( () => {
        res.redirect('/')
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = Controller