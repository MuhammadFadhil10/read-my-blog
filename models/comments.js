const { mongo } = require('../config/mongoConfig');

class Comment {
	constructor(sender, blogId, text, createdTime) {
		this.sender = sender;
		this.blogId = blogId;
		this.text = text;
		this.createdTime = createdTime;
		this.updatedTime = null;
	}
	upload() {
		return mongo().collection('comments').insertOne(this);
	}
	static findByBlog(blogId) {
		return mongo().collection('comments').find({ blogId: blogId });
	}
	static update(commentId, newText) {
		return mongo()
			.collection('comments')
			.updateOne({ _id: commentId }, { $set: { text: newText } });
	}
	static delete(commentId) {
		return mongo().collection('comments').deleteOne({ _id: commentId });
	}
}

module.exports = Comment;
