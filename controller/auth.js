const { validationResult } = require('express-validator');
const { hash, compare } = require('bcryptjs');

const register = async (req, res) => {
	const { email, userName, password, confirmPassword } = req.body;
	const error = validationResult(req);
	if (!error.isEmpty()) {
		return res.json({
			status: 'error',
			message: error.array().map((err) => err.msg),
		});
	}

	const hashedPassword = await hash(password.toString(), 12);
	console.log(hashedPassword);

	return res.json({
		status: 'success',
		message: 'Success create your account!',
	});
};

exports.register = register;
