const express = require('express');
const router = express.Router();

const {
	uploadComment,
	getComment,
	updateComment,
} = require('../controller/comments');

router.post('/send-comment/:senderId/:blogId', uploadComment);
router.get('/comments/:blogId', getComment);
router.patch('/comment/update/:blogId', updateComment);

module.exports = router;
