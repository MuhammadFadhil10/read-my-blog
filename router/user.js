const express = require('express');
const router = express.Router();

const { searchUser } = require('../controller/user');

router.get('/user/s', searchUser);

module.exports = router;
