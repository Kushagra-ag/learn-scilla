module.exports = (connection, type) => {
	return connection.define('accounts', {
		u__name: {
			type: type.STRING,
		},
		email: {
			type: type.STRING,
		},
		pass: {
			type: type.STRING,
		},
	})
}