const express = require('express');
const router = express.Router();

const {
	createBlog,
	updateBlog,
	findById,
	blogSearch,
	myBlogs,
	allBlogs,
	deleteBlog,
} = require('../controller/blog');

// Post
router.post('/create-blog', createBlog);

// get
router.get('/blogs', allBlogs);
router.get('/blog/:blogId', findById);
router.get('/blogs/s', blogSearch);
router.get('/blog/my-blog/:userId', myBlogs);

// update
router.patch('/edit-blog/:blogId', updateBlog);

// delete
router.delete('/blog/delete/:blogId', deleteBlog);

module.exports = router;
