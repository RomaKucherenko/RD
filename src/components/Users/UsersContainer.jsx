import React from "react";
import {follow, setUsers, switchFetchingStatus, unfollow} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import UsersClassComponent from "./UsersClassComponent";

//Этот контейнер нам нужен для общения со Store
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching
    }
}
//Теперь это наш mapDispatchToProps
let objAC = {
    follow,
    unfollow,
    setUsers,
    switchFetchingStatus
}
//Если в connect приходит объект, то он автоматически его методы(cb'и) обёртывает в dispatch
let UsersContainer = connect(mapStateToProps, objAC)(UsersClassComponent)

export default UsersContainer