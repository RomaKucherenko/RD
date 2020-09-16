import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    /*Т.Е. Я для каждого элемента массива диалогов должен создать компоненту и в пропсы закинуть свойство
    * из этого массива*/

    let dialogsElements = props.dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.path}/>
    )

    let messagesElements = props.messages.map(
        (message, index) => <Message
            message={message.message} id={message.id}
            side={props.sideSelector(index, s.right, s.left)} src={message.path}
        />
    )
    let onAddMessage = () => {
        props.addMessage()
    }
    let onTextChange = (e) => {
        //Когда происходит событие, браузер создаёт объект события,
        // записывает в него детали и передаёт его в качестве аргумента функции-обработчику
        let txt = e.target.value
        props.updateNewMessageText(txt)
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onTextChange} placeholder="Введите ваше сообщение"
                              value={props.newMessageText}/>
                    <button onClick={onAddMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
