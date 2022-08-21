const express = require('express');
const router = express.Router();

const {
	createBlog,
	updateBlog,
	findById,
	blogSearch,
	allBlogs,
	deleteBlog,
} = require('../controller/blog');

// Post
router.post('/create-blog', createBlog);

// get
router.get('/blogs', allBlogs);
router.get('/blog/:blogId', findById);
router.get('/blogs/s', blogSearch);

// update
router.patch('/edit-blog/:blogId', updateBlog);

// delete
router.delete('/blog/delete/:blogId', deleteBlog);

module.exports = router;
