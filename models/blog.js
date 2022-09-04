const { mongo } = require('../config/mongoConfig');

class Blog {
	constructor(
		title,
		thumbnail,
		content,
		isAnonymous,
		tag,
		createdTime,
		author
	) {
		this.title = title;
		this.thumbnail = thumbnail;
		this.content = content;
		this.isAnonymous = isAnonymous;
		this.tag = tag;
		this.createdTime = createdTime;
		this.updatedTime = null;
		this.author = author;
	}
	create() {
		return mongo().collection('blogs').insertOne(this);
	}

	static findById(blogId) {
		return mongo().collection('blogs').findOne({ _id: blogId });
	}

	static fetchAll() {
		return mongo().collection('blogs').find({});
	}

	static search(searchData) {
		return mongo()
			.collection('blogs')
			.find({ $text: { $search: searchData } });
	}

	static myBlog(userId) {
		return mongo().collection('blogs').find({ 'author._id': userId });
	}

	static update(
		blogId,
		updatedTitle,
		updatedThumbnail,
		updatedContent,
		isAnonymous,
		updatedTag,
		createdTime,
		updatedTime,
		author
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
						createdTime: createdTime,
						updatedTime: updatedTime,
						author: author,
					},
				}
			);
	}

	static delete(blogId) {
		return mongo().collection('blogs').deleteOne({ _id: blogId });
	}
}

module.exports = Blog;
