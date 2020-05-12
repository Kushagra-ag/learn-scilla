const express = require('express');
const passport = require('passport');
const {forgotPass} = require('../../database/utility.js');
const { check, validationResult } = require('express-validator');
let router = express.Router();

router.get('/', function(req, res, next) {
	console.log('at forgot get');
	if(req.session && req.user)
	{
		res.redirect('/lessons');
	}
	else
	{
		res.render('forgot', {auerr: ''});
		
	}
})

router.post('/',[check('email').not().isEmpty().trim().isEmail().normalizeEmail()
	], function(req, res, next) {
		console.log('at forgot post')

		let errors = validationResult(req);

		if(!errors.isEmpty())
		{
			return res.render('forgot', {auerr: 'Invalid email address'});
		}

		forgotPass(req, info => {
			console.log(info);
			if(info.success)
			{
				res.render('forgot', {auerr: info.success});
			}
			else if(info.message)
			{
				res.render('forgot', {auerr: info.message});
			}
		})
		
	})

module.exports = router;