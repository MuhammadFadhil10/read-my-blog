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
	// check if old "liked topics" is array
	if (Array.isArray(oldProfileData.likedTopics)) {
		if (Array.isArray(likedTopics)) {
			return UserClass.updateProfile(
				userId,
				profilePicture ? profilePicture : oldProfileData.profilePicture,
				userName ? userName : oldProfileData.userName,
				name ? name : oldProfileData.name,
				bio ? bio : oldProfileData.bio,
				web ? web : oldProfileData.web,
				[...oldProfileData.likedTopics, ...likedTopics]
			);
		} else {
			return UserClass.updateProfile(
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
		return UserClass.updateProfile(
			userId,
			profilePicture ? profilePicture : oldProfileData.profilePicture,
			userName ? userName : oldProfileData.userName,
			name ? name : oldProfileData.name,
			bio ? bio : oldProfileData.bio,
			web ? web : oldProfileData.web,
			Array.isArray(likedTopics) ? likedTopics : [likedTopics]
		);
	}
};

module.exports = updateProfileHelper;
