const { mongo } = require('../config/mongoConfig');

class Like {
	static sendLike(blogId, sender) {
		return mongo().collection('likes').insertOne({
			blogId: blogId,
			sender: sender,
			createdTime: new Date().toISOString(),
			updatedTime: null,
		});
	}

	static unLike(blogId, senderId) {
		return mongo()
			.collection('likes')
			.deleteOne({ blogId: blogId, senderId: senderId });
	}
}

exports.Like = Like;
