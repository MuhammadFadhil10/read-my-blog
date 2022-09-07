const express = require('express');
const router = express.Router();

const { createFolder, myFolders } = require('../controller/folder');

router.post('/folder/create/:userId', createFolder);
router.get('/folder/my-folders/:userId', myFolders);

module.exports = router;
