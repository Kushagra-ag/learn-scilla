const utility = require('../database/utility.js'); 
const bcrypt = require('bcryptjs');
const path = require('path');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const pp_jwt = require('passport-jwt');
const express = require('express');
let router = express.Router();

const Strategy = pp_jwt.Strategy;
const extractJwt = pp_jwt.ExtractJwt;

const jwtOptions = {
	jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: 'shhshshsh'
};


let strategy = new Strategy(jwtOptions, function(jwt_payload, next) {
	console.log('payload received', jwt_payload);
	let user = utility.getUser({ id: jwt_payload.id });
	if (user) {
		next(null, user);
	} else {
		next(null, false);
	}
});

passport.use(strategy);


router.get('/', function(req, res, next) {
	console.log('going to index');
	
	res.render('login', {lgerr: res.cookie.lgerr});
	// res.json({ msg: 'default get' });
	delete res.cookie.lgerr;
});


router.post('/', async function(req, res, next) {
	const { u__name, pass } = req.body;
	console.log(req.body);
	if(u__name && pass) {

		let user = await utility.getUser({ u__name: u__name });
		if (!user) {
			res.cookie.lgerr = 'User does not exist';
			//return res.redirect('login');
			return res.json({ msg: 'Does not exist' });
		}
		bcrypt.compare(pass, user.pass, function(lgerr,result) {
			console.log(result);
			if(result==true)
			{
				let payload = { id: user.id };
				let token = jwt.sign(payload, jwtOptions.secretOrKey);
				console.log(token);
				//res.header('Authorization', `Bearer ${token}`);
				res.render('chapters');
				// res.json({ msg: 'ok', token: token });
			}
			else
			{
				//console.log('result not true');
				res.cookie.lgerr = 'Incorrect password or username';
				//res.redirect('login');
				res.json({ msg: 'Incorrect'});
			}

		})
		
	}
	else
	{
		res.cookie.lgerr = 'Incorrect or missing details';
		//res.redirect('login');
		res.json({ msg: 'missing' });
		
	}
});

module.exports = router;