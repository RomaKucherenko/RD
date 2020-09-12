import React from 'react'
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id
    return (
        <div className={s.DialogItem}>
            <img src={props.src}/>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem
