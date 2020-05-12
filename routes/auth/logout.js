const passport = require('passport');
const express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {

	req.logout();

	res.redirect('/lessons');
})

module.exports = router;