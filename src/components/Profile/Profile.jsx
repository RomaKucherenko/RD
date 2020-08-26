import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profile_header}>
                <img src="https://www.bojiboatbrokers.com/wp/wp-content/uploads/bojiboatbrokers.com/2019/04/DJI_0797-HDR-960x400.jpg"></img>
            </div>
            <div className={s.profile_me}>
                <div className="avatar">avatar</div>
                <div className="aboutMe">aboutMe</div>
            </div>
            <div className={s.profile_posts}>
                <div className="new_post">
                    new post
                </div>
                <div className="posts_list">
                    <div className={s.item}>post1</div> 
                    <div className={s.item}>post2</div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile