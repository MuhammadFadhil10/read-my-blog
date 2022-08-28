const { mongo } = require('../config/mongoConfig');

class User {
	static findUser(filter, value) {
		if (filter === 'id') {
			return mongo().collection('users').findOne({ _id: value });
		} else if (filter === 'email') {
			return mongo().collection('users').findOne({ email: value });
		} else if (filter === 'name') {
			return mongo().collection('users').findOne({ name: value });
		}
		return mongo().collection('users').findOne({ userName: value });
	}
}

module.exports = User;
