import React from "react";
import s from "./Users.module.css"
import User from "./User/User";

const Users = (props) => {
    let usersElements = props.users.map(u => {
        return <User id={u.id} name={u.name} status={u.status} followStatus={u.followed}
                     follow={props.follow} unfollow={props.unfollow} avatar={u.photos.small}/>

    })
    return <div className={s.Users}>
        <div className={s.Pages} onClick={(e) => props.onPagesClick(e)}>
            <button value={1}>1</button>
            <button value={2}>2</button>
            <button value={3}>3</button>
            <button value={4}>4</button>
        </div>
        {usersElements}
    </div>
}


// const Usersc = (props) => {
//     let usersElements_1 = props.users.map( u => {
//         return <User id={u.id} name={u.name} location={u.location} status={u.status} avaURL={u.avaURL}
//                      follow={this.follow} unfollow={this.unfollow}
//                      followStatus={u.followStatus}/>
//     })
// }
export default Users