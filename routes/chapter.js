const express = require('express');
let router = express.Router();

router.get('/', function(req,res,next) {
	res.render('chapters')
});

module.exports = router;