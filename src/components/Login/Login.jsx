import React from "react";
import {Field, reduxForm} from "redux-form";
import {login} from "../../Redux/authReducer";
import {connect} from "react-redux";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"input"} name={"email"} placeholder={"Login"}/>
        </div>
        <div>
            <Field component={"input"} type={"password"}
                   name={"password"} placeholder={"Password"}/>
        </div>
        <div>
            <label>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/>Запомни меня
            </label>
        </div>
        <div>
            <button>Войти в IT</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

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