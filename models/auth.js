const { mongo } = require('../config/mongoConfig');

class Auth {
	constructor(email, userName, name, password) {
		this.email = email;
		this.userName = userName;
		this.name = name;
		this.password = password;
		this.profilePicture = null;
		this.bio = null;
		this.likedTopics = null;
		this.web = null;
	}
	createUser() {
		return mongo().collection('users').insertOne(this);
	}
}

module.exports = Auth;
