let bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(10)

const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, salt)
}

const checkPassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword)
}

module.exports = {hashPassword, checkPassword}