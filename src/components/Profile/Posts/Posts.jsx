import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/profileReducer";


const Posts = (props) => {

    let postsElements = props.posts.map(
        post => <Post id={post.id} message={post.message} likes_count={post.likes_count}/>
    )

    let addPost = () => {
        props.dispatch(addPostCreator())
    }
    let changeText = (e) => {
        let text = e.target.value
        let action = updateNewPostTextCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={s.Posts}>
            <h3>Posts</h3>
            <div className={s.NewPost}>
                <div>
                    <textarea placeholder="Введите тест вашего поста" value={props.newPostText} onChange={changeText}/>
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