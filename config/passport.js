const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const utility =  require('../database/utility.js');
const gCred = require('./credentials.js');

const localFields = {
    usernameField: 'email',
    passwordField: 'pass',
    passReqToCallback: true
};

const gFields = {
    clientID: gCred.clientId,
    clientSecret: gCred.clientSecret,
    callbackURL: gCred.callbackURL,
    scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
    ],
    passReqToCallback: true
};


passport.use('login', new LocalStrategy(localFields, utility.verifyLogin));
passport.use('register', new LocalStrategy(localFields, utility.verifyReg));
passport.use('google', new GoogleStrategy(gFields, utility.gAuth));


passport.serializeUser((user, done) => {
    console.log("In user serialize");
    done(null, {email:user.email});
});

passport.deserializeUser((user, done) => {
    console.log("In user deserialize");
    //console.log(email);
    utility.getUser({email:user.email})
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});