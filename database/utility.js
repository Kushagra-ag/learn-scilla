let Users = require('./db.js');

const createUser = async ({ u__name, email, pass }) => { 
	return await Users.create({ u__name, email, pass });
};

const getAllUsers = async () => {
	return await Users.findAll();
};

const getUser = async obj => {
	return await Users.findOne({
		where: obj,
	});
};

module.exports = {createUser, getUser};