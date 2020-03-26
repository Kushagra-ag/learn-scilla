;
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const auth = require('./routes/auth/auth.js');
const chapters = require('./routes/chapters.js');
const port = process.env.PORT || 3000;


const app = express();
app.use(passport.initialize());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


//process.env.GOOGLE_APPLICATION_CREDENTIALS = './config/g_auth.js';


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));


app.use('/auth', auth);

app.use('/chapters', chapters);

// protected route
app.get('/guide', passport.authenticate('jwt', { session: false }), function(req, res) {
  res.json('Success! You can now see this without a token.');
});


app.get('/', function(req, res) {
	res.render('index',{msg:'a'});
});




app.listen(port);