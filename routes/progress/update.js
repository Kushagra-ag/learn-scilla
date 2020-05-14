const utility = require('../../database/utility.js');
const passport = require('passport');
const express = require('express');
let router = express.Router();

router.post('/', passport.authenticate('jwt', {session: false}), async function(req, res, next) {

	console.log('in progress/update');

	if(req.user)
	{
		//let email = req.user.email;
		//let user = await utility.getUser({ email });

		if(req.body.chapter >= req.user.progress)
		{
			utility.updateUser({wallet: user.wallet+100, progress: parseInt(req.body.chapter)+1},{where: {email}})
			.then(() => res.send({success: 'Wallet updated', msg: '100 ZILs have been added to your wallet.'}))
			.catch(() => res.send({err: 'Could not update wallet1', msg: ''}))
		}
		else
		{
			return res.send({noAction: 'Previous chapter', msg: ''});
		}
	}
	else
		return res.send({err: 'not logged in', msg: `You must be logged in for accessing the tutorial.`});
})

module.exports = router;