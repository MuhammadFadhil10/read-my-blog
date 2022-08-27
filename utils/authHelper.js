const { body } = require('express-validator');
class Validate {
	static email(fieldName) {
		return body(fieldName)
			.notEmpty()
			.withMessage('Email field required!')
			.isEmail()
			.withMessage('Fill with correct email!');
	}
}
