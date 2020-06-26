const seq = require('sequelize');
const users = require('../models/users.js');

let connection = new seq ({
	database : process.env.DB,
	username : process.env.DB_USERNAME,
	password : process.env.DB_PASS,
	dialect : process.env.DB_DIALECT
});

connection.authenticate()
.then(() => console.log('Database connection successful'))
.catch(err => console.error('Unable to connect to database'));


let Users = users(connection, seq);

Users.sync()
.then(() => console.log('User table created successfully'))
.catch(err => console.log('User table not created'));

module.exports = Users;