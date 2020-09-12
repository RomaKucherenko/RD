import React from 'react'
import s from './Dialogs.module.css'

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


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
    let newMessageElement = React.createRef()
    let addMessage = () => {
        let txt = newMessageElement.current.value
        props.addMessage(txt)
    }
    let textChange = () => {
        let txt = newMessageElement.current.value
        props.updateNewMessageText(txt)
    }
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                {messagesElements}
                <textarea onChange={textChange} ref={newMessageElement}
                          value={props.dialogsPage.newMessageText}></textarea>
                <button onClick={addMessage}>Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs
