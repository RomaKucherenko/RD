import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import s from "../common/FormControls/FormControls.module.css";
import React from "react";

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={Input}
                   name={"email"}
                   placeholder={"Login"}
                   validate={[requiredField]}/>
        </div>
        <div>
            <Field component={Input}
                   type={"password"}
                   validate={[requiredField]}
                   name={"password"}
                   placeholder={"Password"}/>
        </div>
        <div>
            <label>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/>Запомни меня
            </label>
        </div>
        { error ? <span className={s.Error}>{error}</span> : null}
        <div>
            <button>Войти в IT</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

export default LoginReduxForm