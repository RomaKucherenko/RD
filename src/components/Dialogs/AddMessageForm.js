import React from "react";
import {Field, reduxForm} from "redux-form";

const addMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" placeholder="Ваше сообщение" name="addMessageText"/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
}

const AddMessageReduxForm = reduxForm({
    form:"dialog"
})(addMessageForm)

export default AddMessageReduxForm