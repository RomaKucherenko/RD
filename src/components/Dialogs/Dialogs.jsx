import React from 'react'
import s from './Dialogs.module.css'

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    /*Т.Е. Я для каждого элемента массива диалогов должен создать компоненту и в пропсы закинуть свойство
    * из этого массива*/
    let dialogsElements = props.state.dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    )

    let messagesElements = props.state.messages.map(
        message => <Message message={message.message} id={message.id}/>
    )
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs
