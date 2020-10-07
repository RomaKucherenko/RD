const UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`;
const SEND_MESSAGE = `SEND-MESSAGE`;

let initialState = {
    messages: [
        {id: 1, message: 'Hi', path: "./img/avatars/foto_1.jpg"},
        {id: 2, message: 'Are', path: "./img/avatars/foto_1.jpg"},
        {id: 3, message: 'You', path: "./img/avatars/foto_1.jpg"},
        {id: 4, message: 'Okay', path: "./img/avatars/foto_1.jpg"},
        {id: 5, message: '?', path: "./img/avatars/foto_1.jpg"}
    ],
    dialogs: [
        {id: 1, name: 'Roma', path: "./img/avatars/foto_1.jpg"},
        {id: 2, name: 'Dima', path: "./img/avatars/foto_1.jpg"},
        {id: 3, name: 'Sasha', path: "./img/avatars/foto_1.jpg"},
        {id: 4, name: 'Igor', path: "./img/avatars/foto_1.jpg"},
        {id: 5, name: 'Danya', path: "./img/avatars/foto_1.jpg"}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    //Reducer только изменяет STATE, вызывать callSubscriber
    //мы не будем, тк это не наша responsibility, наша только в том
    //чтобы изменить STATE. Subscriber должен следить за этим изменением
    switch (action.type) {
        case SEND_MESSAGE: {
            let text = action.newMessageText
            let newMessage = {
                id: 6,
                message: text,
                path: "./img/avatars/foto_1.jpg"
            }
            return  {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default:
            return state
    }
}

export const addNewMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})


export default dialogsReducer