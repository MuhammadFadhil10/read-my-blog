const { mongo } = require('../config/mongoConfig');

class Blog {
	constructor(title, thumbnail, content, isAnonymous, tag, author) {
		this.title = title;
		this.thumbnail = thumbnail;
		this.content = content;
		this.isAnonymous = isAnonymous;
		this.tag = tag;
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
		return mongo().collection('blogs').find({ userId: userId });
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

	static delete(blogId) {
		return mongo().collection('blogs').deleteOne({ _id: blogId });
	}
}

module.exports = Blog;
