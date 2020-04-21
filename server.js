;
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
const port = process.env.PORT || 3000;


const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    //store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24// Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    }
}));

app.use(passport.initialize());
app.use(passport.session());


//process.env.GOOGLE_APPLICATION_CREDENTIALS = './config/g_auth.js';


app.set('view engine', 'ejs');

app.use('/auth', auth);



app.use('/lessons', lessons);

// protected route
app.get('/guide', passport.authenticate('local', { session: false }), function(req, res) {
  res.json('Success! You can now see this without a token.');
});


app.get('/', function(req, res) {
	res.render('index');
	console.log("at homepage");
});




app.listen(port);