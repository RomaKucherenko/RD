import React from "react";
import s from "./../common/FormControls/FormControls.module.css"
import {Field, reduxForm} from "redux-form";
import {login} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input}
                   name={"email"}
                   placeholder={"Login"}
                   validate={[requiredField]}/>
        </div>
        <div>
            <Field component={Input} type={"password"} validate={[requiredField]}
                   name={"password"} placeholder={"Password"}/>
        </div>
        <div>
            <label>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/>Запомни меня
            </label>
        </div>
        { props.error ? <span className={s.Error}>{props.error}</span> : null}
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