const updateProfileHelper = (
	UserClass,
	oldProfileData,
	userId,
	profilePicture,
	userName,
	name,
	bio,
	web,
	likedTopics
) => {
	return UserClass.updateProfileHelper(
		userId,
		profilePicture ? profilePicture : oldProfileData.profilePicture,
		userName ? userName : oldProfileData.userName,
		name ? name : oldProfileData.name,
		bio ? bio : oldProfileData.bio,
		web ? web : oldProfileData.web,
		likedTopics
	);
};

module.exports = updateProfile;
