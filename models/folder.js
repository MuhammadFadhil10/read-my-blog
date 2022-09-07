const { mongo } = require('../config/mongoConfig');

class Folder {
	constructor(folderName, userId) {
		this.folderName = folderName;
		this.userId = userId;
		this.blogList = [];
		this.createdTime = new Date().toISOString();
		this.updatedTime = null;
	}

	create() {
		return mongo().collection('folders').insertOne(this);
	}

	static findByUser(userId) {
		return mongo().collection('folders').find({ userId: userId });
	}
	static getBlogList(folderId) {
		return mongo().collections('foders').findOne({ _id: folderId });
	}

	static update(folderId, newFolderName) {
		return mongo()
			.collection('folders')
			.updateOne(
				{ _id: folderId },
				{
					$set: {
						folderName: newFolderName,
						updatedTime: new Date().toISOString(),
					},
				}
			);
	}
	static delete(folderId) {
		return mongo().collection('folders').deleteOne({ _id: folderId });
	}

	static addBlog(folderId, blogId) {
		return mongo()
			.collection('folders')
			.updateOne(
				{ _id: folderId },
				{
					$push: {
						blogList: blogId,
					},
				}
			);
	}
	static removeBlog(folderId, blogId) {
		return mongo()
			.collection('folders')
			.updateOne(
				{ _id: folderId },
				{
					$pull: {
						blogList: blogId,
					},
				}
			);
	}
}

module.exports = Folder;
