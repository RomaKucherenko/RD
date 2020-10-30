import React from "react";
import {login} from "../../Redux/authReducer";
import {connect} from "react-redux";
import LoginReduxForm from "./LoginForm";


const Login = (props) => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = {...formData}
        props.login(email, password, rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default connect(null, {login})(Login)