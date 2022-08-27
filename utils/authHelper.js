const { body } = require('express-validator');
class Validate {
	static email(fieldName) {
		return body(fieldName)
			.notEmpty()
			.withMessage('Email required!')
			.isEmail()
			.withMessage('Fill with correct email!');
	}
	static userName(fieldName) {
		const minPassword = 8;
		return body(fieldName)
			.notEmpty()
			.withMessage('Password Required!')
			.isLength({ min: minPassword })
			.withMessage(`Password minimum length is ${minPassword} character!`);
	}
}

module.exports = Validate;
