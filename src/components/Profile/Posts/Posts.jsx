import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'


const Posts = (props) => {

    let postsElements = props.posts.map(
        post => <Post id={post.id} message={post.message} likesCount={post.likesCount}
                      addLike={props.addLike}/>
    )

    let onAddPost = () => {
        props.addPost()
    }
    let onChangeText = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.Posts}>
            <h3>Posts</h3>
            <div className={s.NewPost}>
                <div>
                    <textarea placeholder="Введите тест вашего поста" value={props.newPostText} onChange={onChangeText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.PostsList}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts