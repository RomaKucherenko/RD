import React from 'react';
import s from './Profile.module.css'
import ProfileHeader from './ProfileHeader/ProfileHeader';
import Me from './Me/Me';
import Posts from './Posts/Posts';

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileHeader />
            <Me />
            <Posts />
        </div>
    )
}

export default Profile