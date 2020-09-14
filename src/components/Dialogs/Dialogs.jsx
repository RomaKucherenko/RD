import React from 'react'
import s from './Dialogs.module.css'

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addNewMessageCreator, updateNewMessageTextCreator} from "../../Redux/Store";


const Dialogs = (props) => {
    /* ПОТОМ
     НУЖНО
     ОБЯЗАТЕЛЬНО ПРИДУМАТЬ
     КУДА ЕЁ ВЫНЕСТИ!!!
         !!
             !!*/
    let fun = function (index) {
        return index % 2 ? s.right : s.left
    }

    /*Т.Е. Я для каждого элемента массива диалогов должен создать компоненту и в пропсы закинуть свойство
    * из этого массива*/
    let dialogsElements = props.dialogsPage.dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.path}/>
    )

    let messagesElements = props.dialogsPage.messages.map(
        (message, index) => <Message
            message={message.message} id={message.id}
            side={fun(index)} src={message.path}
        />
    )

    let addMessage = () => {
        let action = addNewMessageCreator()
        props.dispatch( action )
    }
    let textChange = (e) => {
        let txt = e.target.value
        let action = updateNewMessageTextCreator(txt)
        props.dispatch( action )
    }
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={textChange} placeholder="Введите ваше сообщение"
                              value={props.dialogsPage.newMessageText}/>
                    <button onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
