import React from "react";
import Users from "./Users";

class UsersClassComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }

    follow = (id) => {
        this.props.follow(id)
    }
    unfollow = (id) => {
        this.props.unfollow(id)
    }

    onPagesClick = (e) => {
        this.props.getUsers(e.target.value)
    }

    render() {
        return <Users follow={this.follow} unfollow={this.unfollow}
                      onPagesClick={this.onPagesClick} {...this.props}/>
    }
}

export default UsersClassComponent