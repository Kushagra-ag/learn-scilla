const reg = require('./register.js');
const login = require('./login.js');
const google = require('./google.js');
const forgot = require('./forgot.js');
const reset = require('./reset.js');
const logout = require('./logout.js');

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
		let view = res.cookie.view || 'login';

		res.redirect(`/auth/${view}`);
		delete res.cookie.auerr;
		delete res.cookie.view;
	}
});

router.use('/login', login);
router.use('/register', reg);
router.use('/forgot', forgot);
router.use('/changepassword', reset);
router.use('/logout', logout);
router.use('/api', google);

module.exports = router;