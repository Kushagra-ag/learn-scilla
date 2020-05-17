const passport = require('passport');
const express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {

	res.cookie('zilId', '', {path: '/', maxAge: 0});
	res.redirect('/lessons');
})

module.exports = router;