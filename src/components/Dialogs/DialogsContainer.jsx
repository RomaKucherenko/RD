import React from 'react'
import {addNewMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 let state = store.getState().dialogsPage
//
//
//
//                 let addMessage = () => {
//                     let action = addNewMessageCreator()
//                     store.dispatch( action )
//                 }
//                 let updateNewMessageText = (txt) => {
//                     let action = updateNewMessageTextCreator(txt)
//                     store.dispatch( action )
//                 }
//
//                 return <Dialogs addMessage={addMessage} updateNewMessageText={updateNewMessageText}
//                          newMessageText={state.newMessageText}
//                          dispatch={store.dispatch} sideSelector={sideSelector}
//                          dialogs={state.dialogs} messages={state.messages}/>
//             }
//
//         }
//
//     </StoreContext.Consumer>
// }
//В первый вызов connect передаётся две функции и всё что они вернут
//попадёт в ! props !
let mapStateToProps = (state) => {
    //Внутри connect'a принимает state
    return {
        dialogsPage: state.dialogsPage
    }

}
let mapDispatchToProps = (dispatch) => {
    //Внутри connect'a принимает dispatch'и.bind(store)
    return {
        addMessage: () => {
            dispatch(addNewMessageCreator())
        },
        updateNewMessageText: (txt) => {
            dispatch(updateNewMessageTextCreator(txt))
        }
    }
}
//Во вторые скобки передаем компоненту, которую хотим обернуть в контейнер
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
