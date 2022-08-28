const User = require('../models/user');

const searchUser = async (req, res) => {
	const value = req.query.v;
	try {
		const users = await User.searchUser(value).toArray();
		console.log(users);
	} catch (error) {
		console.log(error);
	}
};

exports.searchUser = searchUser;
