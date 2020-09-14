const ADD_POST = `ADD-POST`;
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;


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
                {id: 5, name: 'Nina', path: "./img/avatars/foto_1.jpg"}
            ],
            newMessageText: `Ваше сообщение`
        },
        profilePage: {
            posts: [
                {id: 1, message: "TE AVEN BAXTALE", likes_count: 4},
                {id: 2, message: "TE AVEN BAXTALE", likes_count: 5}
            ],
            newPostText: "Введи что-то"
        }
    },
    _callSubscriber() {
        //В дальнейшем ты будешь хранить ссылку на rerenderEntireTree
    },

    get state() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },


    addMessage() {
        let newMessage = {
            id: 3,
            message: this._state.dialogsPage.newMessageText,
            path: "./img/avatars/foto_1.jpg"
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ""
        this._callSubscriber()
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber()

    },

    dispatch(action) {
        //Каждый раз когда мы захотим изменить state
        //Мы будем вызывать dispatch и передавать в него
        //объект action{ type: `ADD-POST`}

        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likes_count: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
    }
}

export const addPostActionCreator = () => ( {type: ADD_POST} )
export const updateNewPostTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newText: text} )


window.store = store

// setInterval(
//     () => console.log(store._state.profilePage.newPostText), 1000
// )

export default store