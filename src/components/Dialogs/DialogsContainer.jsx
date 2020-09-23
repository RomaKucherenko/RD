import React from 'react'
import {addNewMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    //Внутри connect'a принимает state
    return {
        dialogsPage: state.dialogsPage
        //connect смотрит изменилась ли ссылка на obj
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
//В первый вызов connect передаётся две функции и всё что они вернут
//попадёт в ! props !
//Во второй вызов передаем компоненту, которую хотим обернуть в контейнер
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
