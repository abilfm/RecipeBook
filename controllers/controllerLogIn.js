const { User } = require("../models")
const { checkPassword } = require('../helpers/bcrypt')
const {translator, capitalize} = require("../helpers/textProcessor")

class Controller {
  static getLogin (req, res) {
    let lang
    if (!req.query.lang) {
      lang = 'en'
    }
    else {
      lang = req.query.lang
    }
    let data = {t_i_t_l_e: 'Sign-In', i_n_p_u_t_1: 'Username', i_n_p_u_t_2 : 'Password' }
    translator(data, lang)
      .then(result => {
        // console.log(result, '<<<< RESULT');
        for (const item in result) {
          result[item] = capitalize(result[item])
        }
        // console.log(result, '<<<< RESULT');
        res.render('login', {result})
      })
      .catch(err => {
        console.log(err);
        res.send(err)
      })
      // res.render("login")
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