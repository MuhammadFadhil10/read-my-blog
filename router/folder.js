const express = require('express');
const router = express.Router();

const {
	createFolder,
	myFolders,
	blogList,
	updateFolder,
	addBlog,
	removeBlog,
	deleteFolder,
} = require('../controller/folder');

router.post('/folder/create/:userId', createFolder);
router.get('/folder/my-folders/:userId', myFolders);
router.get('/folder/blogs/:folderId', blogList);
router.patch('/folder/update/:folderId/:userId', updateFolder);
router.patch('/folder/add-blog/:folderId/:blogId', addBlog);
router.patch('/folder/remove-blog/:folderId/:blogId', removeBlog);
router.delete('/folder/delete/:folderId', deleteFolder);

module.exports = router;
