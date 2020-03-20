;
const pp-jwt = require('passport-jwt');
const Strategy = pp-jwt.Strategy;
const extractJwt = pp-jwt.ExtractJwt;
const sequelize = require('sequelize');


let connection = new sequelize ({
	database : 'zilliqa',
	usernmae : 'root',
	password : 'megamind',
	dialect : 'mysql'
});



app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());








// register route
app.post('/register', function(req, res, next) {
  const { name, email, password } = req.body;
  createUser({ name, password }).then(user =>
    res.json({ user, msg: 'account created successfully' })
  );
});








const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: shhshshsh
};


module.exports = passport => {

	passport.use(

		new Strategy(opts, (payload, done) => {

			connection.query('SELECT u__name FROM acc WHERE u__name = ?', [req.body.username],
		}))
}