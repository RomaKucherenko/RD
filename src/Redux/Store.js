import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        dialogsPage: {
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
            ],
            newMessageText: ``
        },
        profilePage: {
            posts: [
                {id: 1, message: "TE AVEN BAXTALE", likes_count: 4},
                {id: 2, message: "TE AVEN BAXTALE", likes_count: 5}
            ],
            newPostText: ""
        }
    },
    _callSubscriber() {
        //В дальнейшем ты будешь хранить ссылку на rerenderEntireTree
        //Грубо говоря, это функция, которая следит за изменением STATE
    },

    get state() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        //Каждый раз когда мы захотим изменить state
        //Мы будем вызывать dispatch и передавать в него
        //объект action{ type: `ADD-POST`}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        //Мы делегировали изменения STATE reducer'ам
        //а затем уведомили подписчика
        this._callSubscriber()
    }
}

// setInterval(
//     () => console.log(store._state.profilePage.newPostText), 1000
// )