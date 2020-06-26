const cookie_config = {
	maxAge: 604800000,		// 1 week
	httpOnly: true,
	signed: false,
	path: '/'
}

// CLIENT_ID = YOUR_CLIENT_ID
// CLIENT_SECRET = CLIENT_SECRET
// REFRESH_TOKEN = REFRESH__TOKEN
// CALLBACK_URL = CALLBACK
// JWT_SECRET = JWT_SECRET
// DB : 'DB_NAME',
// DB_USERNAME : 'USERNAME',
// DB_PASS : 'PASSWORD',
// DB_DIALECT : 'mysql',

module.exports = {cookie_config};