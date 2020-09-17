import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    const onLike = () => {
        props.addLike(props.id)
    }

    return (
        <div className={s.item}>
            <img
                src="https://litera.net.pl/wp-content/uploads/2020/07/10-najlepszych-scen-z-serialu-Wiedzmin_article.jpg"
                alt=""/>
            {props.message}
            <div>
                <button onClick={onLike}>Like</button>
                {props.likesCount}</div>
        </div>
    )
}
export default Post