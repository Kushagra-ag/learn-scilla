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
		wallet: {
			type: type.INTEGER,
			defaultValue: 0,
		},
		userID: {
			type: type.STRING,
			defaultValue: null,
		},
		gID: {
			type: type.STRING,
			defaultValue: null,
		},
		progress: {
			type: type.INTEGER,
			defaultValue: 1,
		},
		resetPass: {
			type: type.STRING,
			defaultValue: null,
		},
		
	})
}