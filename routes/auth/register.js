const utility = require('../../database/utility.js'); 
const passport = require('passport');
const express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
	res.render('auth', {view:'reg'});
	delete res.cookie.auerr;
});


router.post('/', async function(req, res, next) {
	passport.authenticate('register', function(err, user, info) {

		console.log("info - ", info);

		if(info.success)
		{
			res.cookie.auerr = info.success;
			res.redirect('/auth');
		}
		else if(info.err)
		{
			res.cookie.auerr = info.err;
			res.cookie.view = "reg";
			res.redirect('/auth');
		}
	})(req, res, next);
});


module.exports = router;

