const express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	console.log(req.session);
	console.log(req.user);
	if(req.isAuthenticated())
	{
		res.render('lessons');
	}
	else
	{
		res.redirect('/auth');
	}
});

module.exports = router;