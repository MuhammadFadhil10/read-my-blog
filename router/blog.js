const express = require('express');
const router = express.Router();

const { createBlog } = require('../controller/blog');

// Post
router.post('/api/create-blog', createBlog);
