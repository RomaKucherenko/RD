import React from 'react';
import s from './Header.module.css'
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData, switchFetchingStatus} from "../../Redux/authReducer";
import {authAPI} from "../../dalAPI/dalAPI";


class HeaderClassComponent extends React.Component {
    componentDidMount() {
        this.props.switchFetchingStatus(true)
        authAPI.authAttempt().then(data => {
                if (data.resultCode === 0) {
                    let {id, login} = data.data
                    this.props.setUserData(id, login)
                }
                this.props.switchFetchingStatus(false)
            }
        )
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
    setUserData,
    switchFetchingStatus
}
export default connect(mapStateToProps, objAC)(HeaderClassComponent)