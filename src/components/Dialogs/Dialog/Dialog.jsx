import React from "react";
import s from './Dialog.module.css'
import Avatar from "./Avatar/Avatar";
import Content from "./Content/Content";
import Info from "./Info/Info";

const Dialog = ( props ) => {
    return (
        <div className={s.Dialog}>
            <Avatar img={props.img}/>
            <Content name={props.name} message={props.message}/>
            <Info count={props.count}/>
        </div>
    )
}

export default Dialog