import React from 'react'
import s from '../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={`${s.Message} ${props.side}`}>
            <img src={props.src}/>
            {props.message}
        </div>
    )
}

export default Message
