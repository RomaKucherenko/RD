import React from 'react';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-background"><img src="https://www.bojiboatbrokers.com/wp/wp-content/uploads/bojiboatbrokers.com/2019/04/DJI_0797-HDR-960x400.jpg"></img></div>
            <div className="profile-header">
                <div className="avatar">avatar</div>
                <div className="aboutMe">aboutMe</div>
            </div>
            <div className="profile-myPosts">content-myPosts</div>
            <div className="profile-postsList">content-postsList</div>
        </div>
    )
}

export default Profile