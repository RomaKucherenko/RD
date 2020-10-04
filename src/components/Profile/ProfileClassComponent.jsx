import React from 'react';
import Profile from "./Profile";

class ProfileClassComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setUser(userId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

export default ProfileClassComponent