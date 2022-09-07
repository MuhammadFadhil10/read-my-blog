const express = require('express');
const router = express.Router();

const {
	createFolder,
	myFolders,
	updateFolder,
	deleteFolder,
} = require('../controller/folder');

router.post('/folder/create/:userId', createFolder);
router.get('/folder/my-folders/:userId', myFolders);
router.patch('/folder/update/:folderId/:userId', updateFolder);
router.delete('/folder/delete/:folderId', deleteFolder);

module.exports = router;
