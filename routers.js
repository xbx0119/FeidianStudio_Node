var express = require('express');
var router = express.Router();


var IndexController = require('./controllers/IndexController');


router.get('/index', function(req, res, next) {
	res.redirect('/');
});
router.get('/', IndexController.index);



module.exports = router;