import React from 'react';
import s from './Profile.module.css'
import Header from './Header/Header';
import Me from './Me/Me';
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {

    // console.log(elem.width)
    return (
        <div className={s.profile}>
            <Header/>
            <Me/>
            <PostsContainer />
        </div>
    )
}

export default Profile