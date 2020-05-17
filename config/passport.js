const passport = require('passport');
const passportJWT = require("passport-jwt");
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const {verifyLogin, verifyReg, verifyToken, gAuth} =  require('../database/utility.js');
const {gCred, jwtSecret} = require('./config.js');

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;

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

let cookieExtractor = function(res) {
    
    var token = null;
    if (res && res.cookies) {
        token = res.cookies.zilId;
    }
    return token;
};

const jwtFields = {
    jwtFromRequest: cookieExtractor,
    secretOrKey   : jwtSecret
}

passport.use('login', new LocalStrategy(localFields, verifyLogin));
passport.use('register', new LocalStrategy(localFields, verifyReg));
passport.use('jwt', new JWTStrategy(jwtFields, verifyToken));
passport.use('google', new GoogleStrategy(gFields, gAuth));