const { User } = require("../models")
const {translator, capitalize} = require("../helpers/textProcessor")

class Controller {
  static getRegister (req, res) {
    let lang
    if (!req.query.lang) {
      lang = 'en'
    }
    else {
      lang = req.query.lang
    }
    let data = {t_i_t_l_e: 'Register', i_n_p_u_t_1: 'Username', i_n_p_u_t_2 : 'Password' }
    translator(data, lang)
      .then(result => {
        // console.log(result, '<<<< RESULT');
        for (const item in result) {
          result[item] = capitalize(result[item])
        }
        // console.log(result, '<<<< RESULT');
        res.render('register', {result})
      })
      .catch(err => {
        console.log(err);
        res.send(err)
      })
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