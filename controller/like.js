const { ObjectId } = require('mongodb');
const Like = require('../models/like');
const User = require('../models/user');

const like = async (req, res) => {
	const blogId = new ObjectId(req.params.blogId.trim());
	const senderId = new ObjectId(req.params.senderId.trim());

	const sender = await User.findUser('id', senderId);
	delete sender.password;

	try {
		const isLiked = await Like.checkLike(blogId, senderId);
		if (!isLiked) {
			await Like.sendLike(blogId, sender);
			return res
				.json({
					status: 'success',
					message: 'success like!',
				})
				.status(200);
		}
		await Like.unLike(blogId, senderId);
		res
			.json({
				status: 'success',
				message: 'success unlike!',
			})
			.status(200);
	} catch (error) {
		console.log(error);
	}
};

const getLike = async (req, res) => {
	const blogId = new ObjectId(req.params.blogId.trim());
	console.log(blogId);
	try {
		const likes = await Like.findByBlog(blogId).toArray();
		return res.json({
			status: 'success',
			totalResult: likes.length,
			likes: likes,
		});
	} catch (error) {
		console.log(error);
	}
};

exports.like = like;
exports.getLike = getLike;
