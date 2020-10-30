import React from "react";
import s from "./Users.module.css"
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {
    let usersElements = props.users.map(u => {
        return <User id={u.id} name={u.name} status={u.status} followStatus={u.followed}
                     follow={props.follow} unfollow={props.unfollow} avatar={u.photos.small}
                     switchFollowingProgress={props.switchFollowingProgress}
                     usersInFollowingProgress={props.usersInFollowingProgress}/>

    })
    let buttons = []
    for (let i = 1; i < 10; i++) {
        buttons.push(<button value={i}>{i}</button>)
    }


    return <div className={s.Users}>
        {props.isFetching ? <Preloader/> : null}
        <div className={s.Pages} onClick={(e) => props.onPagesClick(e)}>
            {buttons}
        </div>
        {usersElements}
    </div>

}

export default Users

