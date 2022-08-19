const { mongo } = require('../config/mongoConfig');

class Blog {
	constructor(title, thumbnail, content, isAnonymous, tag) {
		this.title = title;
		this.thumbnail = thumbnail;
		this.content = content;
		this.isAnonymous = isAnonymous;
		this.tag = tag;
	}
	create() {
		return mongo.collection('blogs').insertOne(this);
	}
}

module.exports = Blog;
