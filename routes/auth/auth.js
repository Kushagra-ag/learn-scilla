const reg = require('./register.js');
const login = require('./login.js');
const google = require('./google.js');

const express = require('express');
let router = express.Router();

router.get('/', function(req,res,next) {
	console.log("at auth");
	if(req.session && req.user)
	{
		res.redirect('/lessons');
		console.log("going to lessons from auth");
	}
	else
	{
		res.render('auth', {auerr: res.cookie.auerr, view: res.cookie.view});
		delete res.cookie.auerr;
		delete res.cookie.view;
	}
});

router.use('/login', login);
router.use('/register', reg);
router.use('/api', google);

module.exports = router;