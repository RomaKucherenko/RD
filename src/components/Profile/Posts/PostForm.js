import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(100)

const postForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={TextArea}
                    placeholder="Введите текст вашего поста"
                    name="postText"
                    validate={[requiredField, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
}

const PostReduxForm = reduxForm({
    form:"post"
})(postForm)


export default PostReduxForm