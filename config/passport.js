const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const utility =  require('../database/utility.js');
const gCred = require('./credentials.js');

const customFields = {
    usernameField: 'email',
    passwordField: 'userID',
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


passport.use('login', new LocalStrategy(customFields, utility.verifyLogin));
passport.use('register', new LocalStrategy(customFields, utility.verifyReg));
passport.use('google', new GoogleStrategy(gFields, utility.gAuth));

passport.serializeUser((user, done) => {
    console.log("In user serialize");
    done(null, user.userID);
});

passport.deserializeUser((userId, done) => {
    console.log("In user deserialize");
    console.log(userId);
    utility.getUser({userId})
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});