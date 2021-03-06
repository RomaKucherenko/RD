import React from "react";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const WithAuthRedirect = (Component) => {
    class AuthContainer extends React.Component{
        componentDidMount() {
        }

        render() {
            // console.log(`this.props:`,this.props)
            // console.log(`Component:`, Component)
            if (!this.props.isAuth) return <Redirect to="/Login"/>
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToProps)(AuthContainer)
}

export default WithAuthRedirect