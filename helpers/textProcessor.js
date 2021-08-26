const translate = require("@vitalets/google-translate-api");

const capitalize = (text) => {
  return text.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

const translator = (object, targetLanguage) => {  //RETURNS A PROMISE
  let translateText = JSON.stringify(object)
  return translate(translateText, {to: `${targetLanguage}`})
    .then(data => {
      return JSON.parse(data.text.toLowerCase())
    })
    .catch(err => {
      return err
    })
}

module.exports = {translator, capitalize}