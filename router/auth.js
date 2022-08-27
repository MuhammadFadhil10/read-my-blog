const express = require('express');
const router = express.Router();

const Validate = require('../utils/authHelper');
const { register, login } = require('../controller/auth');

router.post(
	'/register',
	Validate.email('email'),
	Validate.userName('userName'),
	Validate.password('password'),
	Validate.confirmPassword('confirmPassword'),
	register
);

router.post(
	'/login',
	Validate.email('email'),
	Validate.password('password'),
	login
);

module.exports = router;
