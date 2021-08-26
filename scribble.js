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

// const {hashPassword, checkPassword} = require('./helpers/bcrypt')

// let password1 = 'spoonisspoon'
// let password2 = 'isthereaspoon'

// let hashedPass1 = hashPassword(password1)
// let hashedPass2 = hashPassword(password2)

// console.log(hashedPass1, '<<< PASS 1');
// console.log(hashedPass2, '<<< PASS 2');

// let test1 = checkPassword(password1, hashedPass1)

// console.log(test1);

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

const {translator, capitalize, sTranslator} = require("./helpers/textProcessor")

translator('big', 'id')
  .then(data => {
    return (data);
  })

let test1 = [{name: 'one'}, {name: 'two'}]

// sTranslator(test1.map(el => el = JSON.stringify(el)).join(','), 'id')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   })

let test2 = JSON.stringify({"id":1,"name":"Chinese Broccoli with Oyster Sauce","cooking_time":15,"servings":2,"cooking_instructions":"Trim ends off Chinese Broccoli. If any stems are super thick, cut them in half (you want all stems approximately the same width. Steam Chinese Broccoli using whatever method you want - I microwave in a steamer on high for 4 minutes. The stem should be just cooked - not super soft and floppy. Stack the Chinese broccoli together and cut into 4/10cm lengths, then stack neatly on top of each other. Combine water and corn flour in small saucepan, mix to dissolve. Then add remaining ingredients, turn stove onto medium and bring to boil. Boil for 30 seconds to allow to thicken, then remove from stove. Drizzle over Chinese broccoli and serve. Best served warm.","createdAt":"2021-08-26T10:56:01.885Z","updatedAt":"2021-08-26T10:56:01.885Z"},{"id":2,"name":"Chinese Noodle Soup","cooking_time":20,"servings":2,"cooking_instructions":"Place Broth ingredients in a saucepan over high heat. Place lid on, bring to simmer then reduce to medium and simmer for 8 - 10 minutes to allow the flavours to infuse. Meanwhile, cook noodles according to packet directions. Cut bok choys in half (for small / medium) or quarter (for large). Wash thoroughly. Either cook the bok choi in the broth in the soup broth OR noodle cooking water for 1 min (if noodles required boiling). Pick garlic and ginger out of soup. Place noodles in bowls. Top with chicken and bok choy. Ladle over soup, garnish with green onions. Great served with chilli paste or fresh chillis.","createdAt":"2021-08-26T10:56:01.885Z","updatedAt":"2021-08-26T10:56:01.885Z"})


console.log(JSON.parse(test2));

/* 
  static recipesList(req, res) {
    let lang
    let webData
    let toSend = {}
    let DATA
    if (!req.query.lang) {
      lang = 'en'
    }
    else {
      lang = req.query.lang
    }
    let data = {t_i_t_l_e: 'List of Recipe', l_i_n_k_1: 'Add New Recipe', t_h_e_a_d_1 : 'Name', t_h_e_a_d_2 : 'Cooking Time', t_h_e_a_d_3 : 'Servings', t_h_e_a_d_4 : 'Action' ,a_c_t_1 : 'Edit', a_c_t_2 : 'Delete', a_c_t_3 : 'Details'}
    translator(data, lang)
      .then(result => {
        console.log(result, '<<<< RESULT');
        for (const item in result) {
          result[item] = capitalize(result[item])
        }
        // console.log(result, '<<<< RESULT');
        // res.render('register', {result})
        webData = result
        return Recipe.findAll()
      })
      .then(data => {
        DATA = data
        console.log(data, '<<< DATA');
        toSend.id = data.id
        toSend.cooking_time = data.id
        toSend.servings = data.servings
        return sTranslator(data.name, lang)
      })
      .then(data => {
        toSend.name = data
        return sTranslator(DATA.cooking_instructions, lang)
      })
      .then(data => {
        toSend.cooking_instructions = data
        console.log(toSend);
        res.send(toSend)
      })
      // .then(data => {
      //   // res.send(data)
      //   data.name = translator(data.name, lang)
      //   res.render("listRecipes", { data, webData, translator, lang })
      // })

      .catch(err => {
        console.log(err);
        res.send(err)
      }) */