import React from 'react';
import s from './Profile.module.css'
import Header from './Header/Header';
import Me from './Me/Me';
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <Header/>
            <Me userProfile={props.userProfile}/>
            <PostsContainer />
        </div>
    )
}

export default Profile