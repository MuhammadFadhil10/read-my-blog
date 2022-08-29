const { ObjectId } = require('mongodb');
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

const editProfile = async (req, res) => {
	const userId = new ObjectId(req.params.userId.trim());
	const { profilePicture, userName, name, bio, web, likedTopics } = req.body;
	let oldProfileData = null;
	try {
		oldProfileData = await User.findUser('id', userId);
		if (userName) {
			if (userName !== oldProfileData.userName) {
				const userNameExist = await User.findUser('username', userName);
				if (userNameExist) {
					return res.json({
						status: 'error',
						message: 'Username already exist!',
					});
				}
			}
		}

		// check if old "liked topics" is array
		if (Array.isArray(oldProfileData.likedTopics)) {
			if (Array.isArray(likedTopics)) {
				await User.updateProfile(
					userId,
					profilePicture ? profilePicture : oldProfileData.profilePicture,
					userName ? userName : oldProfileData.userName,
					name ? name : oldProfileData.name,
					bio ? bio : oldProfileData.bio,
					web ? web : oldProfileData.web,
					[...oldProfileData.likedTopics, ...likedTopics]
				);
			} else {
				await User.updateProfile(
					userId,
					profilePicture ? profilePicture : oldProfileData.profilePicture,
					userName ? userName : oldProfileData.userName,
					name ? name : oldProfileData.name,
					bio ? bio : oldProfileData.bio,
					web ? web : oldProfileData.web,
					[...oldProfileData.likedTopics, likedTopics]
				);
			}
		} else {
			// where old liked topics not array
			await User.updateProfile(
				userId,
				profilePicture ? profilePicture : oldProfileData.profilePicture,
				userName ? userName : oldProfileData.userName,
				name ? name : oldProfileData.name,
				bio ? bio : oldProfileData.bio,
				web ? web : oldProfileData.web,
				Array.isArray(likedTopics) ? likedTopics : [likedTopics]
			);
		}
		return res.json({
			status: 'success',
			message: 'Profile updated!',
		});
	} catch (error) {
		console.log(error);
	}
};

exports.searchUser = searchUser;
exports.editProfile = editProfile;
