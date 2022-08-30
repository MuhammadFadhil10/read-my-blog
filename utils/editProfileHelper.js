const updateProfile = (UserClass,oldProfileData,userId,profilePicture,userName,name,bio,web,likedTopics) => {
    await UserClass.updateProfile(
        userId,
        profilePicture ? profilePicture : oldProfileData.profilePicture,
        userName ? userName : oldProfileData.userName,
        name ? name : oldProfileData.name,
        bio ? bio : oldProfileData.bio,
        web ? web : oldProfileData.web,
        [...oldProfileData.likedTopics, ...likedTopics]
    );
}

module.exports = updateProfile;