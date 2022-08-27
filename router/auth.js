const express = require('express');
const router = express.Router();

const Validate = require('../utils/authHelper');

router.post('/register', Validate.email('email'));

module.exports = router;
