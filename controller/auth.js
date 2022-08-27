const { validationResult } = require('express-validator');

const register = (req, res) => {
	const { email, userName, password, confirmPassword } = req.body;
	const error = validationResult(req);
	if (!error.isEmpty) {
		return res.json({
			status: 'error',
			message: error.array().map((err) => err.msg),
		});
	}
	return res.json({
		status: 'success',
		message: 'Success create your account!',
	});
};

exports.register = register;
