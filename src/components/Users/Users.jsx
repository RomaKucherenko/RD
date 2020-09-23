import React from "react";
import s from "./Users.module.css"
import User from "./User/User";

const Users = (props) => {
    console.log(props)
    if (props.users.length === 0 ){
        props.setUsers(
            [
                {id: 1, name: `Roma`, followStatus: true, status:"Road To The Dream",
                    avaURL: `./img/avatars/foto_1.jpg`, location:{city: "SPB", country:"Russia"}},
                {id: 2, name: `Dima`, followStatus: false, status:"Road To The Dream",
                    avaURL: './img/avatars/foto_1.jpg', location:{city: "ProjectVenus", country:"USA"}}
            ]
        )
    }
    let follow = (id) => {
        props.follow(id)
    }
    let unfollow = (id) => {
        props.unfollow(id)
    }
    let usersElements = props.users.map( u => {
        return <User id={u.id} name={u.name} location={u.location} status={u.status} avaURL={u.avaURL}
                     follow={follow} unfollow={unfollow}
                     followStatus={u.followStatus}/>
    })
    return <div className={s.Users}>
        {usersElements}
    </div>
}
export default Users