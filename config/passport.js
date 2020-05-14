const passport = require('passport');
const passportJWT = require("passport-jwt");
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const utility =  require('../database/utility.js');
const gCred = require('./credentials.js');

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

var cookieExtractor = function(res) {
    var token = null;
    console.log("ksjiuwh");
    console.log(res.cookies);
    if (res && res.cookies) {
        token = res.cookies.jwt;
        
    }
    return token;
};

const jwtFields = {
    jwtFromRequest: cookieExtractor,
    secretOrKey   : 'abcd'
}

passport.use('login', new LocalStrategy(localFields, utility.verifyLogin));
passport.use('register', new LocalStrategy(localFields, utility.verifyReg));
passport.use('jwt', new JWTStrategy(jwtFields, (jwt_payload, done) => {
console.log('jwt_payload');
    if (jwt_payload.email === "a@a.com") {
        console.log('accepted')
        return done(null, jwt_payload)
    }
    return done(null, false)
}));

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