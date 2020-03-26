const reg = require('./register.js');
const login = require('./login.js');

const express = require('express');
let router = express.Router();

router.get('/', function(req,res,next) {
	res.render('auth', {auerr: res.cookie.auerr});
});

router.use('/login', login);
router.use('/register', reg);

module.exports = router;