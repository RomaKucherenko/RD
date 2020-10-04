import {authAPI, profileAPI} from "../dalAPI/dalAPI";

const ADD_POST = `ADD-POST`;
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;
const ADD_LIKE = `ADD_LIKE`;
const SET_USER_PROFILE = `SET_USER_PROFILE`;

let initialState = {
    posts: [
        {id: 1, message: "Топи, бро", likesCount: 4},
        {id: 2, message: "Ты станешь программистом!", likesCount: 5}
    ],
    userProfile: null, //мы взяли null, чтобы потом if'ом проверить (в Me.jsx)
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: {...action.userProfile}
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
export const updateNewPostTextCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText})
export const addLikeCreator = (postId) => ({type: ADD_LIKE, postId})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})

export const setUser = (userId) => {
    return (dispatch) => {
        !userId ?
            authAPI.authAttempt().then(data => {
                    if (data.resultCode === 0) {
                        let {id} = data.data
                        profileAPI.getProfile(id).then(userData => {
                                dispatch(setUserProfile(userData))
                            }
                        )
                    }
                }
            ):
            profileAPI.getProfile(userId).then(data => {
                    dispatch(setUserProfile(data))
                }
            )
    }
}

export default profileReducer