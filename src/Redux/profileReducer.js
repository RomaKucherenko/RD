const ADD_POST = `ADD-POST`;
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;

export const profileReducer = (state, action) => {
    //Reducer только изменяет STATE, вызывать callSubscriber
    //мы не будем, тк это не наша responsibility, наша только в том
    //чтобы изменить STATE. Subscriber должен следить за этим изменением
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likes_count: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            //this._callSubscriber() См. комменты сверху
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            //this._callSubscriber() См. комменты сверху
            return state
        default:
            return state

    }
}

export const addPostActionCreator = () => ( {type: ADD_POST} )
export const updateNewPostTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newText: text} )

export default profileReducer