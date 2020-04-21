let Users = require('./db.js');
const bcrypt = require('bcryptjs');
const lookup = require('country-code-lookup');
const phone = require('awesome-phonenumber');

const saltRounds = 10;

const createUser = async ({ username, email, userID, gID }) => { 
	return await Users.create({ username, email, userID, gID });
};

const getAllUsers = async () => {
	return await Users.findAll();
};

const getUser = async obj => {
	return await Users.findOne({
		where: obj,
	});
};

const updateUser = async (obj1, obj2) => {
	return await Users.update(
		obj1, obj2
		);
};

const verifyLogin = async (req, email, userID, done) => {
	console.log("In verifyLogin");

	const user = await getUser({email});
	if(user)
	{
		bcrypt.compare(userID, user.userID, function(err, result) {
			console.log("res-",result);

			if(result)
			{
				return req.logIn(user, err => {
					if(err)
						done(err, null, {message: 'Could not log in'})
					else
						done(null, user)
				})
			}
			else
			{
				return done(err, false, {message: 'Incorrect email or password'});
			}
		})
	}
	else
		return done(null, false, {message: 'Email not registered'});
	
}

const verifyReg = async (req, email, userID, done) => {
	console.log("In verifyReg");

	let {username, contact, country, pass, pass__repeat} = req.body;
	let countryCode;
	
	lookup.byCountry(country, obj => {
		countryCode = phone.getCountryCodeForRegionCode(obj.iso2);
	})

	countryCode = phone.getCountryCodeForRegionCode(lookup.byCountry(country).iso2);
	contact = `${countryCode} ${contact}`;

	
	let user = await getUser({ email });
	if(user)
	{
		if(user.userID != 0)
		{
			console.log("userID - ",user.userID);
			return done(null, null, {err: 'Email already registered'});
		}
		else
		{
			userID = await bcrypt.hash(userID, saltRounds);


			return updateUser({userID},{where: {email}})
			.then(user => done(null, user, {success: 'Your account has been created'}))
			.catch(err => done(null, null, {err: 'Could not create account'}));
		}
	}

	userID = await bcrypt.hash(userID, saltRounds);

	return createUser({username, email, contact, country, userID})
	.then(user => done(null, user, {success: 'Your account has been created'}))
	.catch(err => done(null, null, {err: 'Could not create account'}))

	
	
}

const gAuth = async (req, accessToken, refreshToken, profile, done) => {

	console.log("In gAuth");
	let obj = {'userID': profile.id};
	console.log(profile);

	if(profile.email_verified)
	{

		let email = profile.email;

		getUser({email}).then( user => {
			
			//console.log("user - ", user);
			if(user)
			{
				console.log("user existss");
				return updateUser({gID: profile.id},{where: {email}})
				.then(() => {console.log("usssser - ", user)
					req.logIn(user, err => {
						if(err)
							done(err, null, {message: 'Could not login1'})
						else
							done(null, user)
					})
				})
				.catch(err => done(null, null, {message: 'Could not login2'}))
			}

			let userID = 0, gID = profile.id;

			return createUser({
				username: profile.displayName, email: profile.email, userID, gID
			})
			.then(user => done(null,user))
			.catch(err => done(err, null, {message: 'Could not create account'}));
		})
		.catch(err => done(null, null, {message: 'Could not login3'}));

	}
	else
		return done(null, null, {message: 'Account not verified'})
	
}


module.exports = {createUser, getUser, verifyLogin, verifyReg, gAuth};