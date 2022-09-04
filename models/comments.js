import { mongo } from '../config/mongoConfig';

class Comment {
	constructor(sender, blogId, text, createdTime, updatedTime) {
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
