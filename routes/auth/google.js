const express = require('express');
const passport = require('passport');
let router = express.Router();

router.get('/auth/google', passport.authenticate('google'));

router.get('/auth/google/callback', function(req, res, next){
	console.log("api/auth/google/callback called");

	passport.authenticate('google', function(err, user, info) {

		if(!info)
		{
			res.cookie.auerr = info.message;
			res.redirect('/auth/login');
		}
		else
		{
			res.redirect('/lessons');
		}

	})(req, res, next);
})

module.exports = router;