import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {

    let postsElements = props.posts.map(
        post => <Post id={post.id} message={post.message} likes_count={post.likes_count}/>
    )

    let newPostElement = React.createRef();

    let addPost = () => {
        console.log(this)
        debugger
        props.addPost()
    }
    let changeText = () => {
        let text = newPostElement.current.value
        props.store.updateNewPostText(text)
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