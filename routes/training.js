var express = require('express');
const Questions = require("../Questions");
var router = express.Router();

/* GET users listing. */
router.get('/:category/', function(req, res, next) {
	category = req.params['category']
	res.send(Questions[category][Math.floor(Math.random() * Questions[category].length)])

});

module.exports = router;
