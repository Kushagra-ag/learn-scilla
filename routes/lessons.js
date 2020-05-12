const express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	//console.log(req.session);
	//console.log(req.user);
	console.log("in lessons-get");
	
	
	if(req.user && req.session)
	{
		res.render('lessons', {user: req.user.dataValues});	
	}
	else
	{
		res.redirect('/auth/login');
	}
	
});

router.get('/:chapter', (req, res, next) => {

console.log("in lessons:chapter-get");
	res.redirect('/lessons');
})

module.exports = router;