import React from 'react';
import {connect} from "react-redux";
import {setUser} from "../../Redux/profileReducer";
import ProfileClassComponent from "./ProfileClassComponent";
import {withRouter} from "react-router-dom";
import WithAuthRedirect from "../Hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        myId: state.auth.userId,
    }
}
let objAC = {
    setUser
}


//WithAuthRedirect - мы оборачиваем нашу классовую компоненту
//Раньше было вот так
// let WithRouterProfileClassComponent = withRouter(WithAuthRedirect(ProfileClassComponent))
//
// let ProfileContainer = connect(mapStateToProps, objAC)(WithRouterProfileClassComponent)

let ProfileCompose = compose(
    connect(mapStateToProps, objAC),
    withRouter,
    WithAuthRedirect
)(ProfileClassComponent)

export default ProfileCompose