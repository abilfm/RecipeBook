const { User } = require("../models")
const {translator, capitalize} = require("../helpers/textProcessor")

class Controller {
  static home(req, res) {
    let lang
    if (!req.query.lang) {
      lang = 'en'
    }
    else {
      lang = req.query.lang
    }
    let data = {t_i_t_l_e: 'Recipe Book', l_i_n_k_1: 'List of Recipes', l_i_n_k_2 : 'Search Recipes by Ingredients' }
    translator(data, lang)
      .then(result => {
        // console.log(result, '<<<< RESULT');
        for (const item in result) {
          result[item] = capitalize(result[item])
        }
        // console.log(result, '<<<< RESULT');
        res.render('./home', {result})
      })
      .catch(err => {
        console.log(err);
        res.send(err)
      })
  }
}

module.exports = Controller