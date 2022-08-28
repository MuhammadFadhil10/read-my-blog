const { mongo } = require('../config/mongoConfig');

class Auth {
	constructor(email, userName, name, password) {
		this.email = email;
		this.userName = userName;
		this.name = name;
		this.password = password;
	}
	createUser() {
		return mongo().collection('users').insertOne(this);
	}
	static find(filter, value) {
		if (filter === 'id') {
			return mongo().collection('users').findOne({ _id: value });
		} else if (filter === 'email') {
			return mongo().collection('users').findOne({ email: value });
		}
		return mongo().collection('users').findOne({ userName: value });
	}
}

module.exports = Auth;
