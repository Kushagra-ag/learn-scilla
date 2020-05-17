const express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	//console.log(req.session);
	//console.log(req.user);
	console.log('--------------------')
	console.log(req.user);
	console.log("in lessons-get");
	
	if(req.user)
	{
		res.render('lessons', {user: req.user});
	} else {
		res.redirect('/auth/login');
	}	
	

	
	
});

router.get('/:chapter', (req, res, next) => {

	console.log("in lessons:chapter-get");
	
	if(req.user)
	{
		res.redirect('/lessons');
	} else {
		res.redirect('/auth/login');
	}
})

module.exports = router;