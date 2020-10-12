import React from "react";
import {connect} from "react-redux";
import {initializeApp} from "../../Redux/appReducer";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const WithInitializeApp = (Component) => {
    class InitializeApp extends React.Component{
        componentDidMount() {

        }

        render() {
            return <Component {...this.props}/>
        }
    }
    return connect(null, {initializeApp})(InitializeApp)
}

export default WithInitializeApp