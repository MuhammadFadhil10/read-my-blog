const express = require('express');
const router = express.Router();

const {
	uploadComment,
	getComment,
	updateComment,
	deleteComment,
} = require('../controller/comments');

router.post('/send-comment/:senderId/:blogId', uploadComment);
router.get('/comments/:blogId', getComment);
router.patch('/comment/update/:commentId', updateComment);
router.delete('/comment/delete/:commentId', deleteComment);

module.exports = router;
