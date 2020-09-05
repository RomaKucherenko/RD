import React from "react";
import s from './Content.module.css'

const Content = ( props ) => {
    return (
        <div className={s.Content}>
            <p>{props.name}</p>
            <p>{props.message}</p>
        </div>
    )
}

export default Content