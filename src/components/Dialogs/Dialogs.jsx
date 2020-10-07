import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessageReduxForm from "./AddMessageForm";

const Dialogs = (props) => {
    /*Т.Е. Я для каждого элемента массива диалогов должен создать компоненту и в пропсы закинуть свойство
    * из этого массива*/
    const sideSelector = (index, right, left) => {
        //Вынести её, ёпта, куда-нибудь
        return index % 2 ? right : left
    }

    let dialogsElements = props.dialogsPage.dialogs.map(
        dialog => <DialogItem name={dialog.name} src={dialog.path}
                              id={dialog.id}/>
    )


    let messagesElements = props.dialogsPage.messages.map(
        (message, index) => <Message
            message={message.message} id={message.id}
            side={sideSelector(index, s.right, s.left)} src={message.path}
        />
    )
    const addMessage = (data) => {
        props.addMessage(data.addMessageText)
    }
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                <div>{messagesElements}</div>
                <div>
                   <AddMessageReduxForm onSubmit={addMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs
