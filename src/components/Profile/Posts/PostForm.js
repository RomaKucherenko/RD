import React from "react";
import {Field, reduxForm} from "redux-form";

const postForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" placeholder="Введите текст вашего поста" name="postText"/>
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