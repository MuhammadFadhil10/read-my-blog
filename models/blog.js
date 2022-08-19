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
		return mongo().collection('blogs').insertOne(this);
	}

	static findById(blogId) {
		return mongo().collection('blogs').findOne({ _id: blogId });
	}

	static update(
		blogId,
		updatedTitle,
		updatedThumbnail,
		updatedContent,
		isAnonymous,
		updatedTag
	) {
		return mongo()
			.collection('blogs')
			.updateOne(
				{ _id: blogId },
				{
					$set: {
						title: updatedTitle,
						thumbnail: updatedThumbnail,
						content: updatedContent,
						isAnonymous: isAnonymous,
						tag: updatedTag,
					},
				}
			);
	}
}

module.exports = Blog;
