const express = require('express');
const router = express.Router();

const {
	createFolder,
	myFolders,
	updateFolder,
	addBlog,
	deleteFolder,
} = require('../controller/folder');

router.post('/folder/create/:userId', createFolder);
router.get('/folder/my-folders/:userId', myFolders);
router.patch('/folder/update/:folderId/:userId', updateFolder);
router.patch('/folder/add-blog/:folderId/:blogId', addBlog);
router.delete('/folder/delete/:folderId', deleteFolder);

module.exports = router;
