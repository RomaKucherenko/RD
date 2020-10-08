import React from 'react';
import s from './Header.module.css'
import Header from "./Header";
import {connect} from "react-redux";
import {authAttempt, logout} from "../../Redux/authReducer";


class HeaderClassComponent extends React.Component {
    componentDidMount() {
        this.props.authAttempt()
    }

    render() {
        return <Header{...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.auth
    }
}
let objAC = {
    authAttempt,
    logout
}
export default connect(mapStateToProps, objAC)(HeaderClassComponent)