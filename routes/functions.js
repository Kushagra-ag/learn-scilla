const sha256 = require('js-sha256').sha256;
const axios = require("axios");
const bitcoin = require('bitcoinjs-lib');
const express = require('express');
let router = express.Router();

router.post('/c2p8', function(req, res, next) {

	const keyPair = bitcoin.ECPair.makeRandom();
	const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
	const publicKey = keyPair.publicKey.toString('hex');
	const privateKey = keyPair.toWIF();
	return res.json({address, privateKey, publicKey});
})

router.post('/c5', function(req, res, next) {

	let hash = sha256.create();
	hash.update(req.body.text);
	hash = hash.hex();
	return res.json({hash});
})

router.post('/c8', function(req, res, next) {

	axios.get("https://blockchain.info/ticker").then(response => {

		if(response.status == 200) {
			let data = response.data;
			let price = data.USD.last;
			return res.json({price});
		} 
	})
	.catch(err => {
		console.log(err);
	});
})

module.exports = router;