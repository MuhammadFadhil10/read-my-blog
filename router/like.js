const express = require('express');
const router = express.Router();

const { like, getLike } = require('../controller/like');

router.post('/blog/send-like/:blogId/:senderId', like);
router.get('/blog/like/:blogId', getLike);

module.exports = router;
