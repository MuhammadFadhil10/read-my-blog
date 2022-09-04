const { ObjectId } = require('mongodb');
const Comment = require('../models/comments');

const uploadComment = async (req, res) => {
	const senderId = new ObjectId(req.params.senderId.trim());
	const blogId = new ObjectId(req.params.blogId.trim());
	const { text } = req.body;
	try {
		const comment = new Comment(
			senderId,
			blogId,
			text,
			new Date().toISOString()
		);
		await comment.upload();
		return res
			.json({
				status: 'success',
				message: 'comment uploaded!',
			})
			.status(200);
	} catch (error) {
		console.log(error);
	}
};

exports.uploadComment = uploadComment;
