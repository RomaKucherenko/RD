const ADD_POST = `ADD-POST`;
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;
const ADD_LIKE = `ADD_LIKE`;

let initialState = {
    posts: [
        {id: 1, message: "Топи, бро", likesCount: 4},
        {id: 2, message: "Ты станешь программистом!", likesCount: 5}
    ],
    newPostText: ""
}

export const profileReducer = (state = initialState, action) => {
    //Reducer только изменяет STATE, вызывать callSubscriber
    //мы не будем, тк это не наша responsibility, наша только в том
    //чтобы изменить STATE. Subscriber должен следить за этим изменением
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_LIKE: {
            return {
                ...state,
                posts: state.posts.map(p => {
                        if (p.id === action.postId) {
                            console.log(p)
                            return {
                                ...p,
                                likesCount: p.likesCount + 1
                            }
                        }
                        return p
                    }
                )

            }
        }
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addLikeCreator = (postId) => ({type: ADD_LIKE, postId: postId})

export default profileReducer