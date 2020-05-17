const {updateUser, getUser, signToken} = require('../../database/utility.js');
const {cookie_config} = require('../../config/config.js');
const passport = require('passport');
const express = require('express');
let router = express.Router();

router.post('/', passport.authenticate('jwt', {session: false}), async function(req, res, next) {

	console.log('in progress/update');

	if(req.user)
	{
		let email = req.user.email;
		
		req.body.chapter = parseInt(req.body.chapter);

		if(req.body.chapter >= req.user.progress) {
			
			updateUser({wallet: req.user.wallet+100, progress: req.body.chapter+1},{where: {email}})
			.then(async () => {
				
				let user = await getUser({ email });

				const data = {
					username: user.dataValues.username,
					email: user.dataValues.email,
					contact: user.dataValues.contact,
					wallet: user.dataValues.wallet,
					progress: user.dataValues.progress,
				}

				req.logIn(user, {session: false}, err => {
					if(err)
						return done(null, null, {message: 'Unexpected error'})
					else
					{
						const token = signToken(data);
						res.cookie('zilId', token, cookie_config);
						return res.send({success: 'Wallet updated', msg: '100 ZILs have been added to your wallet.'})
					}
				})
			})
			.catch((err) => res.send({err: 'Could not update wallet', msg: ''}))
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