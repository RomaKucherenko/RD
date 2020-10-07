import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'
import PostReduxForm from "./PostForm";


const Posts = (props) => {
    let postsElements = props.profilePage.posts.map(
        post => <Post id={post.id} message={post.message} likesCount={post.likesCount}
                      addLike={props.addLike}/>
    )

    let addPost = (data) => {
       props.addPost(data.postText)
    }
    return (
        <div className={s.Posts}>
            <h3>Posts</h3>
            <div className={s.NewPost}>
                <PostReduxForm onSubmit={addPost}/>
            </div>
            <div className={s.PostsList}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts