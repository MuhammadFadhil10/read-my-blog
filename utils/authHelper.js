const { body } = require('express-validator');
const { validate } = require('uuid');
class Validate {
	static email(fieldName) {
		return body(fieldName)
			.notEmpty()
			.withMessage('Email field required!')
			.isEmail()
			.withMessage('Fill with correct email!');
	}
}

module.exports = Validate;
