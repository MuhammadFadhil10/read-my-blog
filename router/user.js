const express = require('express');
const router = express.Router();

const { searchUser, editProfile } = require('../controller/user');

router.get('/user/s', searchUser);

router.patch('/user/edit-profile/:userId', editProfile);

module.exports = router;
