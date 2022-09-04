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
}

module.exports = Comment;
