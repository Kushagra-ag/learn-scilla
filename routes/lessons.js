const express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	//console.log(req.session);
	console.log(req.user);
	// console.log(req.user.accounts);
	// console.log(req.user.dataValues);
	if(req.isAuthenticated())
	{
		res.render('lessons', {user: req.user.dataValues});
	}
	else
	{
		res.redirect('/auth');
	}
});

module.exports = router;