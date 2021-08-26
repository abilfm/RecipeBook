// let bcrypt = require('bcryptjs')
// let salt = bcrypt.genSaltSync(10)
// let hash = bcrypt.hashSync('thisisapassword', salt) // <<< THIS IS THE ONE THAT GETS KEPT IN THE DATABASE

// console.log(salt, '<<< Tis salt' );
// console.log(hash, '<<< Tis Hash');

// let test1 = bcrypt.compareSync('thisisapassword', hash)
// let test2 = bcrypt.compareSync('wrongwrongwrong', hash)

// console.log(test1);
// console.log(test2);

/* 
Combine:
1. Middleware
2. Session JS
3. Bcrypt JS

To make a login feature

*/

const {hashPassword, checkPassword} = require('./helpers/bcrypt')

let password1 = 'spoonisspoon'
let password2 = 'isthereaspoon'

let hashedPass1 = hashPassword(password1)
let hashedPass2 = hashPassword(password2)

console.log(hashedPass1, '<<< PASS 1');
console.log(hashedPass2, '<<< PASS 2');

let test1 = checkPassword(password1, hashedPass1)

console.log(test1);

/* 
Conclusion: the Helper function works!
*/



// app.get('/', function(req, res, next) {
//   if (req.session.isLogin) {
//     if (req.session.views) {
//       req.session.views++
//       res.setHeader('Content-Type', 'text/html')
//       res.write('<p>views: ' + req.session.views + '</p>')
//       res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
//       console.log(req.session, '<<<< SESSION');
//       res.end()
//     } else {
//       req.session.views = 1
//       res.end('welcome to the session demo. refresh!')
//     }
//   }
//   else {
//     res.redirect('/login')
//   }
// })

// app.get('/users', (req, res) => {
//   if (req.session.isLogin) {
//     res.send('users')
//   }
//   else {
//     res.redirect('/login')
//   }
// })

// /* Req Session 
// Session {
//   cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
//   views: 2
// } <<<< SESSION
// */


// app.get('/login', (req, res) => {
//     /* 
//       Compare username & password to the database, if both are right, req.session.isLogin = true
//       Selain set isLogin jadi 'true', simpan juga username (req.session.username)
//     */
//   req.session.isLogin = true

//   // req.session.username = 'Brian'
//   // res.send('Login')
// })

// app.get('/logout', (req, res) => {
//   req.session.destroy()
//   res.send('logged out')
// })