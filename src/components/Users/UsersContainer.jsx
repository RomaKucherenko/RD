import React from "react";
import {follow, requestUsers, switchFetchingStatus, switchFollowingProgress, unfollow} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import WithAuthRedirect from "../Hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getIsFetching,
    getTotalUsersCount,
    getUsers,
    getUsersInFollowingProgress,
} from "../../Redux/Selectors/usersSelector";

//Этот контейнер нам нужен для общения со Store
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        isFetching: getIsFetching(state),
        usersInFollowingProgress: getUsersInFollowingProgress(state),
        totalUsersCount: getTotalUsersCount(state)
    }
}
//Теперь это наш mapDispatchToProps
let objAC = {
    follow,
    unfollow,
    requestUsers,
    switchFetchingStatus,
    switchFollowingProgress
}
//Если в connect приходит объект, то он автоматически его методы(cb'и) обёртывает в dispatch
//Раньше было вот так
// let UsersContainer = connect(mapStateToProps, objAC)(WithAuthRedirect(UsersClassComponent))

let UsersCompose = compose(
    connect(mapStateToProps, objAC),
    WithAuthRedirect
)(Users)

export default UsersCompose