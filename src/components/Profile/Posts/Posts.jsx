import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Store";

const Posts = (props) => {

    let postsElements = props.posts.map(
        post => <Post id={post.id} message={post.message} likes_count={post.likes_count}/>
    )


    let newPostElement = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let changeText = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={s.Posts}>
            <h3>Posts</h3>
            <div className={s.NewPost}>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={changeText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.PostsList}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts