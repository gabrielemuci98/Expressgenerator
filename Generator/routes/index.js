var express = require('express');// carica il modulo express
var router = express.Router();//ottiene un oggetto router da express

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router; //esporta il modulo per poterlo usare in app.js
