module.exports = (connection, type) => {
	return connection.define('accounts', {
		username: {
			type: type.STRING,
		},
		email: {
			type: type.STRING,
			primaryKey: true,
		},
		contact: {
			type: type.STRING,
		},
		country: {
			type: type.STRING,
		},
		userID: {
			type: type.STRING,
			defaultValue: 0,
		},
		gID: {
			type: type.STRING,
			defaultValue: 0,
		},
		
	})
}