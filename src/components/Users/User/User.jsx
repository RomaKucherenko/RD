import React from "react";
import s from "./../Users.module.css"
import defaultAvatar from "./../../../assets/avatars/RD.jpg"
import {NavLink} from "react-router-dom";

const User = (props) => {
    const onChange = () => {
        if (props.followStatus === true) {
            props.unfollow(props.id)
        } else if (props.followStatus === false) {
            props.follow(props.id)
        }
    }
    return <div className={s.User}>
        <div>
            <NavLink to={"/Profile/" + props.id}>
                <img src={props.avatar ? props.avatar : defaultAvatar}/>
            </NavLink>
            <button onClick={onChange} id={props.id}
                    disabled={props.usersInFollowingProgress.some(id => id == props.id)}>
                {props.followStatus ? `UNFOLLOW` : `FOLLOW`}
            </button>
        </div>
        <div className={s.description}>
            <div className={s.block}>
                <p>{props.name}</p>
                <p className={s.status}>{props.status}</p>
            </div>
            <div className={s.block}>
                <p>{`props.location.city`},{`props.location.country`}</p>
            </div>
        </div>
    </div>
}

export default User