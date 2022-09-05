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
}

module.exports = Folder;
