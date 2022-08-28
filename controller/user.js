const User = require('../models/user');

const searchUser = async (req, res) => {
	const value = req.query.v;
	try {
		const users = await User.searchUser(value).toArray();
		if (users.length === 0) {
			return res
				.json({
					status: 'error',
					message: 'User not found',
				})
				.status(404);
		}
		return res
			.json({
				status: 'success',
				totalResult: users.length,
				users: users.map((user) => {
					return {
						profilePicture: user.profilePicture,
						userName: user.userName,
						name: user.name,
						bio: user.bio,
						likedTopics: user.likedTopics,
						web: user.web,
					};
				}),
			})
			.status(404);
	} catch (error) {
		console.log(error);
	}
};

exports.searchUser = searchUser;
