import React from "react";
import s from './Avatar.module.css'

const Avatar = ( props ) => {
    return (
        <div className={s.Avatar}>
            <img src={props.img} alt=""/>
        </div>
    )
}

export default Avatar