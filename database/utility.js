let Users = require('./db.js');
const bcrypt = require('bcryptjs');
const lookup = require('country-code-lookup');
const phone = require('awesome-phonenumber');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const secret = 'abcd';

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
				return req.logIn(user, {session: false}, err => {
					if(err)
						done(null, null, {message: 'Could not log in'})
					else
					{
						const data = {
							username: user.dataValues.username,
							email: user.dataValues.email,
							contact: user.dataValues.contact,
							wallet: user.dataValues.wallet,
							progress: user.dataValues.progress,
						}
						const token = jwt.sign(data, secret, {expiresIn:604800});
						// console.log(token);
						done(null, user, {token: token})
					}
				})
			}
			else
			{
				return done(null, false, {message: 'Incorrect email or password'});
			}
		})
	}
	else
		return done(null, null, {message: 'Email not registered'});
	
}

const verifyReg = async (req, email, userID, done) => {
	console.log("In verifyReg");

	let {username, contact, country, pass, pass__repeat} = req.body;
	
	let user = await getUser({ email });
	if(user)
	{
		if(user.userID)
		{
			console.log("userID - ",user.userID);
			return done(null, null, {message: 'Email already registered'});
		}
		else
		{
			userID = await bcrypt.hash(userID, saltRounds);


			return updateUser({userID},{where: {email}})
			.then(user => done(null, user, {success: 'Your account has been created'}))
			.catch(err => done(null, null, {message: 'Could not create account'}));
		}
	}

	userID = await bcrypt.hash(userID, saltRounds);

	return createUser({username, email, contact, country, userID})
	.then(user => done(null, user, {success: 'Your account has been created'}))
	.catch(err => done(null, null, {message: 'Could not create account'}))

	
	
}

const gAuth = async (req, accessToken, refreshToken, profile, done) => {

	console.log("In gAuth");
	let obj = {'userID': profile.id};
	console.log(profile);

	if(profile.email_verified)
	{

		let email = profile.email;

		getUser({email}).then( user => {
			
			
			if(user)
			{
				console.log("user existss");
				return updateUser({gID: profile.id},{where: {email}})
				.then(() => {console.log("usssser - ", user)
					req.logIn(user, err => {
						if(err)
							done(null, null, {message: 'Could not login1'})
						else
							done(null, user)
					})
				})
				.catch(err => done(null, null, {message: 'Could not login2'}))
			}

			let gID = profile.id;

			return createUser({
				username: profile.displayName, email: profile.email, gID
			})
			.then(user => done(null,user))
			.catch(err => done(null, null, {message: 'Could not create account'}));
		})
		.catch(err => done(null, null, {message: 'Could not login3'}));

	}
	else
		return done(null, null, {message: 'Account not verified'})
	
}

const forgotPass = async (req, callback) => {
	console.log("in forgotPass");

	let {email} = req.body;


	
	getUser({ email })
	.then(user => {

		if(user)
		{
			console.log(user);
			let rndm = Math.floor((Math.random()*5)+10);
			let date = Buffer.from(Date.now().toString(), 'binary').toString('base64');
			let id = Buffer.from(cryptoRandomString({length: rndm, type: 'base64'}), 'binary').toString('base64');
			let token = `${date}${id}`;

			console.log(token);

			const url = `http://localhost:3000/auth/changepassword/${token}`;

			updateUser({resetPass:token},{where: {email}})
			.then(user => {

				let transporter = nodemailer.createTransport({
					service: 'gmail',
					auth: {
						user: 'abc@gmail.com',
						pass: 'password'
					}
				});

				let mailOptions = {
					from: 'abc@gmail.com',
					to: email,
					subject: 'Reset your password',
					text: `This is your link - ${url}`
				};

				transporter.sendMail(mailOptions, function(err, info){
					if (err) {
						console.log(err);
						info.message = 'Cannot send email';
						return callback(info)
					} else {
						console.log('Email sent: ' + info.response);
						info.success = 'An email has been sent to reset your password';
						return callback(info);

					}
				})
			})
			.catch(err => {
				info.message = 'Cannot send email';
				return callback(info)
			})
			

		}
		else
		{
			info.message = 'Email not registered';
			return callback(info)
		}
	})
	
}

const getResetPass = (token, callback) => {

	let info={};
	
	getUser({resetPass: token})
	.then(user => {
		
		if(user)
		{
			info.success = 'Valid link';
			return callback(info)
		}
		else
		{
			info.message = 'Invalid link';
			return callback(info)
		}
	})
	.catch(err => {
		info.message = 'Invalid link';
		return callback(info)
	})
}

const postResetPass = (req, token, callback) => {

	let info={};
	
	getUser({resetPass: token})
	.then(user => {
		
		//console.log(user);
		if(user)
		{
			//console.log(req);
			bcrypt.hash(req.body.pass, saltRounds)
			.then(pass => {

				console.log(pass);
				updateUser({userID:pass, resetPass:null},{where: {resetPass: token}})
				.then(() => {
					info.success = 'Valid link';
					console.log(info);
					return callback(info)
				})
				.catch(() => {
					info.message = 'Could not complete request';
					return callback(info)
				})
			})
			.catch(() => {
				info.message = 'Could not complete request';
				return callback(info)
			})

		}
		else
		{
			info.err = 'Invalid link';
			return callback(info)
		}
	})
	.catch(err => {
		info.message = 'Could not complete request';
		return callback(info)
	})
	console.log("eend");
	
}

module.exports = {createUser, getUser, updateUser, verifyLogin, verifyReg, gAuth, forgotPass, getResetPass, postResetPass};