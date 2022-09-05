const express = require('express');
const router = express.Router();

const { createFolder } = require('../controller/folder');

router.post('/folder/create/:userId', createFolder);

module.exports = router;
