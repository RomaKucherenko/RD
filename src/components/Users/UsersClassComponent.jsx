import React from "react";
import * as axios from "axios";
import Users from "./Users";
import {usersAPI} from "../../dalAPI/dalAPI";

class UsersClassComponent extends React.Component {
    componentDidMount() {
        this.props.switchFetchingStatus(true)
            usersAPI.getUsers()
            .then(data => {
                    this.props.switchFetchingStatus(false)
                    this.props.setUsers(data.items)
                }
            )
    }

    follow = (id) => {
        this.props.follow(id)
    }
    unfollow = (id) => {
        this.props.unfollow(id)
    }

    onPagesClick = (e) => {
        this.props.switchFetchingStatus(true)
        usersAPI.getUsers(e.target.value)
            .then(data => {
                    this.props.switchFetchingStatus(false)
                    this.props.setUsers(data.items)
                }
            )
    }

    render() {
        return <Users follow={this.follow} unfollow={this.unfollow}
                      onPagesClick={this.onPagesClick} isFetching={this.props.isFetching}
                      users={this.props.users}/>
    }
}

export default UsersClassComponent