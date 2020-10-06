import React from 'react';
import s from './Profile.module.css'
import Header from './Header/Header';
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateStatus} from "../../Redux/profileReducer";

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <Header/>
            <ProfileInfo userProfile={props.userProfile} status={props.status}
                         updateStatus={props.updateStatus}/>
            <PostsContainer />
        </div>
    )
}

export default Profile