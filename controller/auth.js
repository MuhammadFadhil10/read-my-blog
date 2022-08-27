const { validationResult } = require('express-validator');

const register = (req, res) => {
	const { email, userName, password, confirmPassword } = req.body;
	const error = validationResult();
	if (!error.isEmpty) {
		return res.json({
			status: 'error',
			message: error.array().map((err) => err.msg),
		});
	}
};