import React from 'react';
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import ProfileClassComponent from "./ProfileClassComponent";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}
let objAC = {
    setUserProfile
}

let WithRouterProfileClassComponent = withRouter(ProfileClassComponent)

let ProfileContainer = connect(mapStateToProps, objAC)(WithRouterProfileClassComponent)
export default ProfileContainer