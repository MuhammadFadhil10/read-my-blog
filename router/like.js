const express = require('express');
const router = express.Router();

const { like } = require('../controller/like');

router.post('/blog/send-like/:blogId/:senderId', like);

module.exports = router;
