const express = require('express');
const router = express.Router();

const { uploadComment } = require('../controller/comments');

router.post('/comment/:senderId/:blogId', uploadComment);

module.exports = router;
