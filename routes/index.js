var express = require('express');
var router = express.Router();

var quiz_Controller = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quiz_Controller.question);
router.get('/quizes/answer', quiz_Controller.answer);

/* GET autores  */

router.get('/author', function(req, res, next) {
  res.render('author', { autor: 'Miguel P64' });
});


module.exports = router;