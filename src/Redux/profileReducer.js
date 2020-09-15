const ADD_POST = `ADD-POST`;
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;

let initialState = {
    posts: [
        {id: 1, message: "TE AVEN BAXTALE", likes_count: 4},
        {id: 2, message: "TE AVEN BAXTALE", likes_count: 5}
    ],
    newPostText: ""
}

export const profileReducer = (state = initialState, action) => {
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

export const addPostCreator = () => ( {type: ADD_POST} )
export const updateNewPostTextCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newText: text} )

export default profileReducer