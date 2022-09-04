const { ObjectId } = require('mongodb');
const Comment = require('../models/comments');
const User = require('../models/user');

const uploadComment = async (req, res) => {
	const senderId = new ObjectId(req.params.senderId.trim());
	const blogId = new ObjectId(req.params.blogId.trim());
	const { text } = req.body;
	const sender = await User.findUser('id', senderId);
	delete sender.password;
	try {
		const comment = new Comment(sender, blogId, text, new Date().toISOString());
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

const getComment = async (req, res) => {
	const blogId = new ObjectId(req.params.blogId.trim());
	try {
		const comments = await Comment.findByBlog(blogId).toArray();
		return res
			.json({
				status: 'success',
				totalResults: comments.length,
				comments: comments,
			})
			.status(200);
	} catch (error) {
		console.log(error);
	}
};

const updateComment = async (req, res) => {
	const commentId = new ObjectId(req.params.commentId.trim());
	const { newText } = req.body;
	try {
		await Comment.update(commentId, newText);
		return res.json({
			status: 'success',
			message: 'comment updated',
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteComment = async (req, res) => {
	const commentId = new ObjectId(req.params.commentId.trim());
	try {
		await Comment.delete(commentId);
		return res.json({
			status: 'success',
			message: 'comment deleted!',
		});
	} catch (error) {
		console.log(error);
	}
};

exports.uploadComment = uploadComment;
exports.getComment = getComment;
exports.updateComment = updateComment;
exports.deleteComment = deleteComment;
