import React from 'react';
import Profile from "./Profile";

//При переходе на URL мы единажды создаём объект класса
//Функциональную компоненту мы бы вызывали каждый раз
class ProfileClassComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.myId
        this.props.setUser(userId)
        this.props.getStatus(userId)
    }
    render() {
        return <Profile {...this.props}/>
    }
}

export default ProfileClassComponent