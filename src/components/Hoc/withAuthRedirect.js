import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const WithAuthRedirect = (Component) => {
    const AuthContainer = (props) => {
        if (!props.isAuth) return <Redirect to="/Login"/>
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(AuthContainer)
}

export default WithAuthRedirect