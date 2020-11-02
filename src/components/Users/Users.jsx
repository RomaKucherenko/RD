import React, {useEffect, useState} from "react";
import s from "./Users.module.css"
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "./Paginator/Paginator";
import { debounce } from "lodash"

const Users = (props) => {
    let [pagesCountOnInterface, setPagesCountOnInterface] = useState(1)
    useEffect(() => {
        props.requestUsers(pagesCountOnInterface)
    }, [pagesCountOnInterface])
    const divRef = React.createRef()
    const onScroll = debounce((event) => {
        console.log(window.innerHeight, window.outerHeight, window.scrollY)
    }, 150)

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
    },[])

    const scrollUsersRequest = () => {
        setPagesCountOnInterface(pagesCountOnInterface + 1)
    }

    let usersElements = props.users.map(u => {
        return <User id={u.id} name={u.name} status={u.status} followStatus={u.followed}
                     follow={props.follow} unfollow={props.unfollow} avatar={u.photos.small}
                     switchFollowingProgress={props.switchFollowingProgress}
                     usersInFollowingProgress={props.usersInFollowingProgress}/>

    })


    return <div className={s.Users} ref={divRef} onScroll={onScroll}>
        {props.isFetching ? <Preloader/> : null}
        <Paginator totalCount={props.totalUsersCount} onPagesClick={props.onPagesClick}/>
        {usersElements}
        <button onClick={scrollUsersRequest}>request</button>
    </div>
}

export default Users

