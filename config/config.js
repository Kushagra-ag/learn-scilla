const gCred = {
	'clientId': 'YOUR_CLIENT_ID',
	'clientSecret': 'CLIENT_SECRET',
	refreshToken: 'REFRESH__TOKEN'
	'callbackURL': 'CALLBACK'
}

const cookie_config = {
	maxAge: 604800000,		// 1 week
	httpOnly: true,
	signed: false,
	path: '/'
}

const jwtSecret = 'SECRET';

module.exports = {gCred, cookie_config, jwtSecret};