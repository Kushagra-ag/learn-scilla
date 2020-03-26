const utility = require('../database/utility.js'); 
const bcrypt = require('bcryptjs');
const path = require('path');
const express = require('express');
let router = express.Router();
const saltRounds = 10;

router.get('/', function(req, res, next) {
	res.render('login', {view:'register'});
	delete res.cookie.lgerr;
});


router.post('/', async function(req, res, next) {
	let { u__name, email, pass } = req.body;
	console.log(pass);
	console.log(email);
	console.log(u__name);

	if(u__name && email && pass)
	{

		
		pass = await bcrypt.hash(pass, saltRounds);


		let user = await utility.getUser({ email: email });
		if (user) {
			
			res.cookie.lgerr = 'Email already registered';
			res.redirect('register');
		}

		utility.createUser({ u__name, email, pass }).then(user =>
			res.redirect('login')
			)
		.catch(() => {
			res.cookie.lgerr = 'Cannot register';
			res.redirect('register');
		});

	} else
	{
		
		res.cookie.lgerr = 'User does not exist';
		return res.redirect('login');
	}
});

module.exports = router;

