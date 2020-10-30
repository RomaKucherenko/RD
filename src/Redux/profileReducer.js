import {profileAPI} from "../dalAPI/dalAPI";

const ADD_POST = `profile/ADD_POST`;
const UPDATE_NEW_POST_TEXT = `profile/UPDATE_NEW_POST_TEXT`;
const ADD_LIKE = `profile/ADD_LIKE`;
const SET_STATUS = `profile/SET_STATUS`;
const SET_USER_PROFILE = `profile/SET_USER_PROFILE`;

let initialState = {
    posts: [
        {id: 1, message: "Топи, бро", likesCount: 4},
        {id: 2, message: "Ты станешь программистом!", likesCount: 5}
    ],
    userProfile: null, //мы взяли null, чтобы потом if'ом проверить (в ProfileInfo.jsx)
    newPostText: "",
    status: ""
}

export const profileReducer = (state = initialState, action) => {
    //Reducer только изменяет STATE, вызывать callSubscriber
    //мы не будем, тк это не наша responsibility, наша только в том
    //чтобы изменить STATE. Subscriber должен следить за этим изменением
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: {...action.userProfile}
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case ADD_LIKE: {
            return {
                ...state,
                posts: state.posts.map(p => {
                        if (p.id === action.postId) {
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

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const addLikeCreator = (postId) => ({type: ADD_LIKE, postId})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const setUser = (userId) =>
    async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data))
    }
export const updateStatus = (status) =>
    //Можно сделать логику, которая будет смотреть а стоит ли postit' статус, изменился ли он
    async (dispatch) => {
        let resultCode = await profileAPI.updateStatus(status)
        if (resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
export const getStatus = (userId) =>
    async (dispatch) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data))
    }

export default profileReducer