const express = require('express');
const router = express.Router();

const {
	createBlog,
	updateBlog,
	findById,
	blogSearch,
	allBlogs,
} = require('../controller/blog');

// Post
router.post('/create-blog', createBlog);

// get
router.get('/blogs', allBlogs);
router.get('/blog/:blogId', findById);
router.get('/blogs/s', blogSearch);

// update
router.patch('/edit-blog/:blogId', updateBlog);

module.exports = router;
