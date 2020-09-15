import React from 'react'
import {addNewMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let state = props.store.getState()
    const sideSelector = (index, right, left) => {
        return index % 2 ? right : left
    }



    let addMessage = () => {
        let action = addNewMessageCreator()
        props.store.dispatch( action )
    }
    let updateNewMessageText = (txt) => {
        let action = updateNewMessageTextCreator(txt)
        props.store.dispatch( action )
    }
    return (
        <Dialogs addMessage={addMessage} updateNewMessageText={updateNewMessageText}
                 newMessageText={state.dialogsPage.newMessageText}
                 dispatch={props.store.dispatch} sideSelector={sideSelector}
                 dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>
)}

export default DialogsContainer
