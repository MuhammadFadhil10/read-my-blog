const express = require('express');
const router = express.Router();

const { createBlog } = require('../controller/blog');

// Post
router.post('/create-blog', createBlog);

module.exports = router;
