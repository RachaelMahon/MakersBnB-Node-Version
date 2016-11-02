var express = require('express');
var router = express.Router();
// var model = require('./models/addresses.js');
// var prop = new Properties();

/* GET home page. */
router.get('/', function(req, res, next) {
//   sequelize.query('SELECT * FROM addresses').then(function(addresses) {
//     console.log(addresses);
//   });
  res.render('index', { title: 'Express' });
});

module.exports = router;
