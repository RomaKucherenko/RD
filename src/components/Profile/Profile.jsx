import React from 'react';
import s from './Profile.module.css'
import Header from './Header/Header';
import Me from './Me/Me';
import Posts from './Posts/Posts';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <Header />
            <Me />
            <Posts posts={props.state.posts}/>
        </div>
    )
}

export default Profile