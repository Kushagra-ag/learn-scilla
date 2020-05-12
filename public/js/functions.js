const bitcoin = require('bitcoinjs-lib');


function generateKeyPairs () {
	/*It can generate a random address [and support the retrieval of transactions for that address (via 3PBP)*/
	const keyPair = bitcoin.ECPair.makeRandom();
	const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
	const publicKey = keyPair.publicKey.toString('hex');
	const privateKey = keyPair.toWIF();
	console.log("Addresss - ", address);
	return { address, privateKey, publicKey };
}

exports = generateKeyPairs;