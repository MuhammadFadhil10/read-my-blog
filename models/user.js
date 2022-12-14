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
	static findUsers(filter, value) {
		if (filter === 'id') {
			return mongo().collection('users').find({ _id: value });
		} else if (filter === 'email') {
			return mongo().collection('users').find({ email: value });
		} else if (filter === 'name') {
			return mongo().collection('users').find({ name: value });
		}
		return mongo().collection('users').find({ userName: value });
	}

	static searchUser(value) {
		return mongo()
			.collection('users')
			.find({ $text: { $search: value } });
	}

	static updateProfile(
		userId,
		profilePicture,
		userName,
		name,
		bio,
		web,
		likedTopics
	) {
		return mongo()
			.collection('users')
			.updateOne(
				{ _id: userId },
				{
					// not update field if request not contain that field
					$set: {
						profilePicture: profilePicture,
						userName: userName,
						name: name,
						bio: bio,
						web: web,
						likedTopics: likedTopics,
					},
				}
			);
	}
}

module.exports = User;
