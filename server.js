require('./config/passport.js');
const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const auth = require('./routes/auth/auth.js');
const lessons = require('./routes/lessons.js');
const functions = require('./routes/functions.js');
const progress = require('./routes/progress/progress.js');
const bitcoin = require('bitcoinjs-lib');
let helmet = require('helmet');
const port = process.env.PORT || 3000;


const app = express();

app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy({
	policy: 'no-referrer'
}));
app.use(helmet.featurePolicy({
	features: {
		vibrate: ["'none'"],
		camera: ["'none'"]
	}
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use(passport.initialize());

app.set('view engine', 'ejs');

app.use('/auth', auth);
app.use('/lessons', passport.authenticate('jwt', {session: false, failureRedirect: '/auth/login'}), lessons);
app.use('/functions', passport.authenticate('jwt', {session: false, failureRedirect: '/auth/login'}), functions);
app.use('/progress', passport.authenticate('jwt', {session: false, failureRedirect: '/auth/login'}), progress);


app.get('/', function(req, res) {
	res.render('index');
	console.log("at homepage");
});

app.use(function(req,res){
	res.status(404).render('404');
});

app.listen(port);