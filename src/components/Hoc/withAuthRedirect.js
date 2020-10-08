import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const WithAuthRedirect = (Component) => {
    class AuthContainer extends React.Component{
        render() {
            //console.log(`Я инициализировался`)
            if (!this.props.isAuth) return <Redirect to="/Login"/>
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToProps)(AuthContainer)
}

export default WithAuthRedirect