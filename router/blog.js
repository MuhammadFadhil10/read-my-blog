const express = require('express');
const router = express.Router();

const { createBlog, updateBlog } = require('../controller/blog');

// Post
router.post('/create-blog', createBlog);

// update
router.patch('/edit-blog/:blogId', updateBlog);

module.exports = router;
