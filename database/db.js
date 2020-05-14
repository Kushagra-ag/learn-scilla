const seq = require('sequelize');
const users = require('../models/users.js');


let connection = new seq ({
	database : 'zilliqa',
	username : 'root',
	password : 'megamind',
	dialect : 'mysql'
	// database : 'DB_NAME',
	// username : 'USERNAME',
	// password : 'PASSWORD',
	// dialect : 'mysql',
});

connection.authenticate()
.then(() => console.log('Database connection successful'))
.catch(err => console.error('Unable to connect to database'));


let Users = users(connection, seq);

Users.sync()
.then(() => console.log('User table created successfully'))
.catch(err => console.log('User table not created'));

module.exports = Users;