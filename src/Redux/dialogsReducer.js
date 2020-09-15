const UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`;
const SEND_MESSAGE = `SEND-MESSAGE`;

const dialogsReducer = (state, action) => {
    //Reducer только изменяет STATE, вызывать callSubscriber
    //мы не будем, тк это не наша responsibility, наша только в том
    //чтобы изменить STATE. Subscriber должен следить за этим изменением
    switch (action.type) {
        case SEND_MESSAGE:
            let text = state.newMessageText
            state.newMessageText = ""
            let newMessage = {
                id: 6,
                message: text,
                path: "./img/avatars/foto_1.jpg"
            }
            state.messages.push(newMessage)
            //this._callSubscriber() См. комменты сверху
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            //this._callSubscriber() См. комменты сверху
            return state
        default:
            return state
    }
}

export const addNewMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})


export default dialogsReducer