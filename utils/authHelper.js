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
		return body(fieldName).notEmpty().withMessage('username Required!');
	}
	static password(fieldName) {
		const minPassword = 8;
		return body(fieldName)
			.notEmpty()
			.withMessage('Password Required!')
			.isLength({ min: minPassword })
			.withMessage(`Password minimum length is ${minPassword} character!`);
	}
	static confirmPassword(fieldName) {
		return body(fieldName, 'confirm your password')
			.notEmpty()
			.custom((value, { req }) => {
				if (value !== req.body.password) {
					throw new Error();
				}
				return true;
			});
	}
}

module.exports = Validate;
