import React from "react";
import {followCreator, setUsersCreator, switchFetchingStatusCreator, unfollowCreator} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import UsersClassComponent from "./UsersClassComponent";

//Этот контейнер нам нужен для общения со Store
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followCreator(id))
        },
        unfollow: (id) => {
            dispatch(unfollowCreator(id) )
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        },
        switchFetchingStatus: (isFetching) => {
            dispatch(switchFetchingStatusCreator(isFetching))
        }

    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)

export default UsersContainer