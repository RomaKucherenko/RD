import React from 'react';
import Profile from "./Profile";
import Redirect from "react-router-dom/es/Redirect";

//При переходе на URL мы единажды создаём объект класса
//Функциональную компоненту мы бы вызывали каждый раз
class ProfileClassComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(`constructor`)
    }

    componentDidMount() {
        console.log(`CDM`)
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.myId
        this.props.setUser(userId)
        this.props.getStatus(userId)
    }

    render() {
        console.log(`Render`)
        return <Profile {...this.props}/>
    }
}

export default ProfileClassComponent