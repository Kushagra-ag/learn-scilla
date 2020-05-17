const passport = require('passport');
const bitcoin = require('bitcoinjs-lib');
const {cookie_config} = require('../../config/config.js');
const express = require('express');
let router = express.Router();


router.get('/', function(req, res, next) {
	console.log('arrived at login-get');
	
	if(req.session && req.user)
	{
		return res.redirect('/lessons');
	}

	res.render('auth', {auerr: '' || res.cookie.auerr, view: 'login', err:''});
	delete res.cookie.auerr;
	
});


router.post('/', function(req, res, next) {
	passport.authenticate('login', function(err, user, info) {
		console.log(info);
		
		if(!info.token)
		{
			res.render('auth', {auerr: info.message, view: 'login', email: req.body.email || '', err:''});	
		}
		else
		{
			res.cookie('zilId', info.token, cookie_config);
			res.redirect('/lessons');
		}




	})(req, res, next);

});


module.exports = router;