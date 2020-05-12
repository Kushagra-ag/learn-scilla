const check = require('./check.js');
const update = require('./update.js');
const express = require('express');
let router = express.Router();

router.get('/', function(req,res,next) {
	
	console.log("at progress");
});

router.use('/check', check);
router.use('/update', update);

module.exports = router;