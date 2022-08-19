const express = require('express');
const router = express.Router();

const { createBlog, updateBlog, findById } = require('../controller/blog');

// Post
router.post('/create-blog', createBlog);

// get
router.get('/blog/:blogId', findById);

// update
router.patch('/edit-blog/:blogId', updateBlog);

module.exports = router;
