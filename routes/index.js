var express = require('express');
var router = express.Router();
// var model = require('./models/addresses.js');
// var prop = new Properties();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hostSignUp', function(req, res, next) {
  res.render('hostSignUp');
});

router.get('/guestsignup', function(req, res, next) {
  res.render('guestSignup');
});



module.exports = router;
