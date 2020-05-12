const utility = require('../../database/utility.js'); 
const passport = require('passport');
const express = require('express');
const { check, validationResult } = require('express-validator');

let router = express.Router();

router.get('/', function(req, res, next) {
	console.log('in register-get');
	console.log(res.cookie.customBody);
	let form;

	
	res.render('auth', {auerr: '', view:'register', err: '', values: ''});
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
		console.log(validationResult(req));
		if(!errors.isEmpty())
		{
			errors.errors.forEach(elem => {
				
				list += `${elem.param},`;
			});
			//console.log(list);
			list = list.slice(0,-1);
			
			res.cookie.list = list;
			msg = 'Fields in red have invalid/missing values';
			if(list.indexOf('pass') != -1)
				msg+= '. Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
			console.log("list - ", list);


			let form;
			err = {
				
				username: list.indexOf('username') == -1 ? false : true,
				email: list.indexOf('email') == -1 ? false : true,
				contact: list.indexOf('contact') == -1 ? false : true,
				country: list.indexOf('country') == -1 ? false : true,
				pass: list.indexOf('pass') == -1 ? false : true,
				confirmPass: list.indexOf('confirmPass') == -1 ? false : true,

			};console.log(errors.errors);

			return res.render('auth', {auerr: msg, view:'register', err: err, values: req.body})
		}

		passport.authenticate('register', function(err, user, info) {

			console.log("info - ", info);

			if(info.success)
			{
				res.cookie.auerr = info.success;
				res.redirect('/auth/login');
			}
			else if(info.message)
			{
				//res.cookie.auerr = info.message;
				res.render('auth', {auerr: info.message, view:'register', err: '', values: req.body});
			}
		})(req, res, next);
	});


module.exports = router;

