const express = require('express');
const router = express.Router();

const { uploadComment, getComment } = require('../controller/comments');

router.post('/send-comment/:senderId/:blogId', uploadComment);
router.get('/comments/:blogId', getComment);

module.exports = router;
