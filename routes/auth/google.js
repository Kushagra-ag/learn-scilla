const express = require('express');
const passport = require('passport');
const {cookie_config} = require('../../config/config.js');
let router = express.Router();

router.get('/auth/google', passport.authenticate('google'));

router.get('/auth/google/callback', function(req, res, next){
	console.log("api/auth/google/callback called");

	passport.authenticate('google', function(err, user, info) {

		console.log(info);
		if(info.message)
		{
			res.cookie.auerr = info.message;
			res.redirect('/auth/login');
		}
		else
		{
			res.cookie('zilId', info.token, cookie_config);
			res.redirect('/lessons');
		}

	})(req, res, next);
})

module.exports = router;