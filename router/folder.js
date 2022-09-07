const express = require('express');
const router = express.Router();

const {
	createFolder,
	myFolders,
	updateFolder,
} = require('../controller/folder');

router.post('/folder/create/:userId', createFolder);
router.get('/folder/my-folders/:userId', myFolders);
router.patch('/folder/update/:folderId', updateFolder);

module.exports = router;
