import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {

    let postsElements = props.posts.map (
        post => <Post id={post.id} message={post.message} likes_count={post.likes_count} />
    )
    return (
        <div className={s.Posts}>
            <div className="new_post">
                <div>
                    <textarea name="" id="" cols="100" rows="2"></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>

            </div>
            <div className="posts_list">
                {postsElements}
            </div>
        </div>
    )
}

export default Posts