import React from 'react'
import {addNewMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";



const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage
                const sideSelector = (index, right, left) => {
                    return index % 2 ? right : left
                }

                let addMessage = () => {
                    let action = addNewMessageCreator()
                    store.dispatch( action )
                }
                let updateNewMessageText = (txt) => {
                    let action = updateNewMessageTextCreator(txt)
                    store.dispatch( action )
                }

                return <Dialogs addMessage={addMessage} updateNewMessageText={updateNewMessageText}
                         newMessageText={state.newMessageText}
                         dispatch={store.dispatch} sideSelector={sideSelector}
                         dialogs={state.dialogs} messages={state.messages}/>
            }

        }

    </StoreContext.Consumer>
}

export default DialogsContainer
