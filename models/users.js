module.exports = (connection, type) => {
	return connection.define('accounts', {
		provider: {
			type: type.STRING,
		},
		u__name: {
			type: type.STRING,
		},
		email: {
			type: type.STRING,
		},
		userID: {
			type: type.STRING,
			primaryKey: true,
		},
	})
}