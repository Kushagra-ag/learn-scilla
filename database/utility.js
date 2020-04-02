let Users = require('./db.js');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

const createUser = async ({ provider, u__name, email, userID }) => { 
	return await Users.create({ provider, u__name, email, userID });
};

const getAllUsers = async () => {
	return await Users.findAll();
};

const getUser = async obj => {
	return await Users.findOne({
		where: obj,
	});
};

const verifyLogin = async (req, email, userID, done) => {
	console.log("In verifyLogin");

	const user = await getUser({'provider': 'local', email});
	if(user)
	{
		
		bcrypt.compare(userID, user.userID, function(err, result) {
			console.log("res-",result);

			if(result)
			{
				req.logIn(user, err => {
					if(err)
						done(err, null, {message: 'Could not log in'});
				});
				done(null, user);
			}
			else
			{
				done(err, false, {message: 'Incorrect email or userIDword'});
			}
		})
	}
	else
	{
		
		done(null, false, {message: 'Email not registered'});
	}
}

const verifyReg = async (req, email, userID, done) => {
	console.log("In verifyReg");

	const {u__name} = req.body;
	//console.log(req.body);

	if(u__name && email && userID)
	{
		let user = await getUser({ email });
		if(user)
		{
			console.log("erroor");
			done(null, null, {err: 'Email already registered'});
		}
		else
		{
			userID = await bcrypt.hash(userID, saltRounds);

			createUser({ provider: 'local', u__name, email, userID }).then(user => {
				done(null, user, {success: 'Your account has been created'});
			})
		}
	}
	else
	{
		done(null, null, {err: 'Incorrect details'});
	}
}

const gAuth = async (req, accessToken, refreshToken, profile, done) => {

	console.log("In gAuth");
	let obj = {'userID': profile.id};
	console.log(profile);

	let userID = await bcrypt.hash(profile.id, saltRounds);

	getUser({userID}).then( user => {
		console.log("error - ", err);
		console.log("user - ", user);
		if(user)
		{
			console.log("user existss");
			return done(null, user);
		}

		createUser({provider: profile.provider, u__name: profile.displayName, email: profile.email, userID});
	}).catch(err => done(err, null));

	// let user = await Users.findOrCreate({ 
	// 	where: obj,
	// });

	// if(user)
	// {
	// 	console.log("User exists");
	// 	return done(null, user);
	// }
	// 	// function (err, user) {
	// 	// 	console.log("error - ", err);
	// 	// 	console.log("user - ", user);
	// 	// 	return done(err, user);
	// 	// });

	// 	return done(err, user);
}


module.exports = {createUser, getUser, verifyLogin, verifyReg, gAuth};