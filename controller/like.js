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
		} else {
			await Like.unLike(blogId, senderId);
		}
	} catch (error) {
		console.log(error);
	}
};

exports.like = like;
