const express = require('express');
const passport = require('passport');
let router = express.Router();

// router.get('/auth/google', passport.authenticate('google', {
// 	scope: [
// 	'https://www.googleapis.com/auth/userinfo.profile',
// 	'https://www.googleapis.com/auth/userinfo.email'
// 	]
// }));

router.get('/auth/google/callback', function(req, res, next){
	console.log("api/auth/google/callback called");

	passport.authenticate('google', function(err, user, info) {
		console.log("info - ", info);
		
	})(req, res, next);
})

module.exports = router;