import React from "react";
import s from "./Users.module.css"
import User from "./User/User";
import Preloader from "../Preloader/Preloader";

const Users = (props) => {
    let usersElements = props.users.map(u => {
        return <User id={u.id} name={u.name} status={u.status} followStatus={u.followed}
                     follow={props.follow} unfollow={props.unfollow} avatar={u.photos.small}/>

    })
return <div className={s.Users}>
    {props.isFetching ? <Preloader/> : null}
    <div className={s.Pages} onClick={(e) => props.onPagesClick(e)}>
        <button value={1}>1</button>
        <button value={2}>2</button>
        <button value={3}>3</button>
        <button value={4}>4</button>
    </div>
    {usersElements}
</div>

}

export default Users

