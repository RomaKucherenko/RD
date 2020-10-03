import React from 'react'
import s from './Me.module.css'
import Preloader from "../../Preloader/Preloader";
import defaultAvatar from "../../../assets/avatars/RD.jpg"

const Me = (props) => {
    if(!props.userProfile){
        return <Preloader/>
    }
    let userPhoto = props.userProfile.photos.large
    return (
        <div className={s.Me}>
            <div className={s.Avatar}>
                <div>{props.userProfile.fullName}</div>
                <img src={userPhoto ? userPhoto : defaultAvatar} />
            </div>
            <div className={s.Description}>
                {props.userProfile.aboutMe}
            </div>
        </div>
    )
}

export default Me