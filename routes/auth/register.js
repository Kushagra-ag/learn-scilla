const utility = require('../../database/utility.js'); 
const passport = require('passport');
const express = require('express');
const { check, validationResult } = require('express-validator');

let router = express.Router();

router.get('/', function(req, res, next) {
	console.log('in register-get');
	console.log(res.cookie.customBody);
	let form;
	if(res.cookie.list)
	{
		res.cookie.list = res.cookie.list.split(",");

		form = {
			username: {
				err: res.cookie.list.indexOf('username') == -1 ? false : true,
				val: res.cookie.customBody.username || '',
			},
			email: {
				err: res.cookie.list.indexOf('email') == -1 ? false : true,
				val: res.cookie.customBody.email || '',
			},
			contact: {
				err: res.cookie.list.indexOf('contact') == -1 ? false : true,
				val: res.cookie.customBody.contact || '',
			},
			country: {
				err: res.cookie.list.indexOf('country') == -1 ? false : true,
				val: res.cookie.customBody.country || '',
			},
			pass: {
				err: res.cookie.list.indexOf('pass') == -1 ? false : true,
				val: res.cookie.customBody.pass || '',
			},
			confirmPass: {
				err: res.cookie.list.indexOf('confirmPass') == -1 ? false : true,
				val: res.cookie.customBody.confirmPass || '',
			}
		}
	}
	
	res.render('auth', {auerr: res.cookie.auerr, view:'register', form: form, values: res.cookie.customBody});
	delete res.cookie.auerr;
	delete res.cookie.customBody;
	delete res.cookie.list;
});


router.post('/', [check('username').not().isEmpty().trim().escape().isLength({min:6, max:50}),
	check('email').not().isEmpty().trim().isEmail().normalizeEmail(),
	check('contact').not().isEmpty().trim().isNumeric(),
	check('country').not().isEmpty().escape(),
	check('pass').not().isEmpty().custom(val => {if(val.match((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)))return true}),
	check('confirmPass').not().isEmpty().custom((val, {req}) => val==req.body.pass)
	], async function(req, res, next) {
		
		res.cookie.customBody = req.body;
		
		let errors = validationResult(req), msg=``, list=''; 
		//console.log(validationResult(req));
		if(!errors.isEmpty())
		{
			errors.errors.forEach(elem => {
				// msg += `Invalid ${elem.param} value<br>`;
				list += `${elem.param},`;
			});
			//console.log(list);
			list = list.slice(0,-1);
			
			res.cookie.list = list;
			msg = 'Fields in red have invalid/missing values';
			if(list.indexOf('pass') != -1)
				msg+= '. Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
			console.log("list - ", list);
			res.cookie.auerr = msg;
			return res.redirect('/auth/register');
		}

		passport.authenticate('register', function(err, user, info) {

			console.log("info - ", info);

			if(info.success)
			{
				res.cookie.auerr = info.success;
				res.redirect('/auth/login');
			}
			else if(info.err || info.message)
			{
				res.cookie.auerr = info.err || info.message;
				res.redirect('/auth/register');
			}
		})(req, res, next);
	});


module.exports = router;

