const { validationResult } = require('express-validator');
const { hash, compare } = require('bcryptjs');

const Auth = require('../models/auth');

const register = async (req, res) => {
	const { email, userName, password, confirmPassword } = req.body;
	const error = validationResult(req);
	if (!error.isEmpty()) {
		return res.json({
			status: 'error',
			message: error.array().map((err) => err.msg),
		});
	}

	const emailExist = await Auth.find('email', email);
	const userNameExist = await Auth.find('userName', userName);

	if (emailExist || userNameExist) {
		return res.json({
			status: 'error',
			message: emailExist
				? `email ${email} is already registered!`
				: `username ${userName} is already registered!`,
		});
	}

	const hashedPassword = await hash(password.toString(), 12);

	const user = new Auth(email, userName, hashedPassword);
	await user.createUser();

	return res.json({
		status: 'success',
		message: 'Success create your account!',
	});
};

const login = async (req, res) => {
	const { email, password } = req.body;
	// check if input not error
	const error = validationResult(req);
	if (!error.isEmpty()) {
		return res.json({
			status: 'error',
			message: error.array().map((err) => err.msg),
		});
	}
	// check if user exist with email
	const userExist = await Auth.find('email', email);
	if (!userExist) {
		return res.json({
			status: 'error',
			message: 'email or password wrong!',
		});
	}
	const isPasswordMatch = await compare(password, userExist.password);
	if (!isPasswordMatch) {
		return res.json({
			status: 'error',
			message: 'email or password wrong!',
		});
	}
	return res.json({
		status: 'success',
		message: 'you are logged in!',
	});
};

exports.register = register;
exports.login = login;
