;
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const reg = require('./routes/register.js');
const login = require('./routes/login.js');

const port = process.env.PORT || 3000;


const app = express();
app.use(passport.initialize());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());




app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

// register route
app.use('/register', reg);


app.use('/login', login);

app.get('/chapters', passport.authenticate('jwt', { session: false }), function(req, res) {
	console.log('going to chapters');
	res.render('chapters');
});

// protected route
app.get('/guide', passport.authenticate('jwt', { session: false }), function(req, res) {
  res.json('Success! You can now see this without a token.');
});


app.get('/', function(req, res) {
	res.render('index',{msg:'a'});
});




app.listen(port);
