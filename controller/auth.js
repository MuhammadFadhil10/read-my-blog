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
	const userNameExist = await Auth.find('email', userName);

	console.log(emailExist);
	console.log(userNameExist);

	// const hashedPassword = await hash(password.toString(), 12);
	// console.log(hashedPassword);

	return res.json({
		status: 'success',
		message: 'Success create your account!',
	});
};

exports.register = register;
