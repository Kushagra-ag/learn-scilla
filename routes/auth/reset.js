const express = require('express');
const passport = require('passport');
const {getResetPass, postResetPass} = require('../../database/utility.js');
const { check, validationResult } = require('express-validator');
let router = express.Router();

router.get('/:token', async function(req, res, next) {
	console.log('at reset get');
	let token = req.params.token;
	console.log(token);

	if(req.session && req.user)
	{
		res.redirect('/lessons');
	}
	else
	{
		let info = await getResetPass(token, info => {

			console.log('get-reset info - ', info);
			if(info.success)
			{
				res.render('reset');
			}
			else
			{
				res.redirect('/404');
			}
		});
		
		
	}
})

router.post('/:token',[check('pass').not().isEmpty().custom(val => {if(val.match((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)))return true}),
	check('confirmPass').not().isEmpty().custom((val, {req}) => val==req.body.pass)
	], function(req, res, next) {
		console.log('at reset post')

		let token = req.params.token;
		let errors = validationResult(req);

		if(!errors.isEmpty())
		{
			console.log(errors);

			return res.render('reset', {auerr: 'Passwords don\'t match'});
		}

		postResetPass(req, token, info => {

			console.log('post-reset info - ', info)
			if(info.success)
			{
				console.log('1');
				res.cookie.auerr = 'Account details updated';
				res.redirect('/auth/login');
			}
			else if(info.message)
			{
				console.log('2');
				res.render('reset', {auerr: info.message});
			}
			else
			{
				console.log('3');
				res.redirect('/404');
			}
		})
		
	})

module.exports = router;