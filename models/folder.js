const { mongo } = require('../config/mongoConfig');

class Folder {
	constructor(folderName, userId) {
		this.folderName = folderName;
		this.userId = userId;
		this.createdTime = new Date().toISOString();
		this.updatedTime = null;
	}

	create() {
		return mongo().collection('folders').insertOne(this);
	}

	static findByUser(userId) {
		return mongo().collection('folders').find({ userId: userId });
	}

	static update(folderId, newFolderName) {
		return mongo()
			.collection('folders')
			.updateOne({ _id: folderId }, { $set: { folderName: newFolderName } });
	}
	static delete(folderId) {
		return mongo()
			.collection('folders')
			.deleteOne({ _id: folderId, updatedTime: new Date().toISOString() });
	}
}

module.exports = Folder;
