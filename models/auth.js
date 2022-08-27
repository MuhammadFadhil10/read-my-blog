const { mongo } = require('../config/mongoConfig');

class Auth {
	constructor(email, userName, password) {
		this.email = email;
		this.userName = userName;
		this.password = password;
	}
	createUser() {
		return mongo().collection('users').insertOne(this);
	}
	static findById(id) {
		return mongo().collection('users').findOne({ _id: id });
	}
}
