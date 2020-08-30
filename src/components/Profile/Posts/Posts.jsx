import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
    return (
        <div className={s.profile_posts}>
            <div className="new_post">
                <textarea name="" id="" cols="100" rows="2"></textarea>
                <button>Add</button>
            </div>
            <div className="posts_list">
                <Post message="TE AVEN BAXTALE" like="4"/>
                <Post message="TE AVEN BAXTALE" like="1"/>
            </div>
        </div>
    )
}

export default Posts