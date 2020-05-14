const utility = require('../../database/utility.js');
const passport = require('passport');
const express = require('express');
let router = express.Router();

router.post('/', passport.authenticate('jwt', {session: false}), async function(req, res, next) {

	console.log("in progress/check");
	
	if(req.user)
	{
		// let email = req.user.email;
		// let user = await utility.getUser({ email });

		if(req.body.chapter > req.user.progress)		
		{
			return res.send({err: 'Not permissible', msg: `You must attempt the chapters in serial order.<br> Currently, you are on <b>Chapter ${user.progress}</b>`});
		}
		else
		{
			return res.send({success: 'Valid request'});
		}
	}
	else
	{
		return res.send({err: 'not logged in', msg: `You must be logged in for accessing the tutorial.`});
	}
})

module.exports = router;