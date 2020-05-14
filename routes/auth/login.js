const passport = require('passport');
const bitcoin = require('bitcoinjs-lib');
const axios = require('axios');
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
		
		// if(info)
		// {
			
		// 	res.render('auth', {auerr: info.message, view: 'login', email: req.body.email || '', err:''});	
		// }
		// else
		//console.log(res.req.headers);
		
		// res.set('token', `Bearer ${info.token}`)
		// req.headers['token'] =  `Bearer ${info.token}`;
		res.cookie('jwt', info.token);
		//console.log('-----resObject----\n', res);
			// req.body.token = info.token;
			console.log(req.headers);
			//console.log(res.headers)
			res.redirect('/lessons');
			// axios({
			// 	method: 'GET',
			// 	url: 'http://localhost:3000/lessons',
			// 	headers: {
			// 		Authorization: `Bearer ${info.token}`
			// 	}
			// })
			// .then(res=>console.log('res'))
			// .catch(err=>console.log(err))
			//console.log(res)
			console.log("end")




		})(req, res, next);


	// const keyPair = bitcoin.ECPair.makeRandom();
	// const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
	// const publicKey = keyPair.publicKey.toString('hex');
	// const privateKey = keyPair.toWIF();
	// console.log("Addresss - ", address);
	// return
	// return { address, privateKey, publicKey };

});


module.exports = router;