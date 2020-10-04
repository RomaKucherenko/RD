import {followAPI, usersAPI} from "../dalAPI/dalAPI";

const FOLLOW = `FOLLOW`
const UNFOLLOW = `UNFOLLOW`
const SET_USERS = `SET_USERS`
const SET_PAGE_NUMBER = `SET_PAGE_NUMBER`
const SWITCH_FETCHING_STATUS = `SWITCH_FETCHING_STATUS`
const SWITCH_FOLLOWING_PROGRESS = `SWITCH_FOLLOWING_PROGRESS`

let initialState = {
    users: [],
    pageNumber: 1,
    isFetching: false,
    usersInFollowingProgress: []
}

const usersReducer = (state = initialState, action) => {

    //Reducer только изменяет STATE, вызывать callSubscriber
    //мы не будем, тк это не наша responsibility, наша только в том
    //чтобы изменить STATE. Subscriber должен следить за этим изменением
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.pageNumber
            }
        case SWITCH_FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SWITCH_FOLLOWING_PROGRESS:
            return {
                ...state,
                usersInFollowingProgress:
                    action.isFollowing ? [...state.usersInFollowingProgress, action.userId] :
                        [state.usersInFollowingProgress.filter(id => id != action.userId)]
            }
        default:
            return state
    }
}

export const acceptFollow = (userId) => ({type: FOLLOW, userId: userId})
export const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setPageNumber = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber})
export const switchFetchingStatus = (isFetching) => ({type: SWITCH_FETCHING_STATUS, isFetching})
export const switchFollowingProgress = (isFollowing, userId) => ({type: SWITCH_FOLLOWING_PROGRESS, isFollowing, userId})

export const getUsers = (pageNumber = 1) => {
    return (dispatch) => {
        dispatch(switchFetchingStatus(true))
        usersAPI.getUsers(pageNumber)
            .then(data => {
                    dispatch(switchFetchingStatus(false))
                    dispatch(setUsers(data.items))
                }
            )
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(switchFollowingProgress(true, userId))
        followAPI.unfollow(userId).then(resultCode => {
                if (resultCode === 0) {
                    dispatch(acceptUnfollow(userId))
                }
                dispatch(switchFollowingProgress(false, userId))
            }
        )
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(switchFollowingProgress(true, userId))
        followAPI.follow(userId).then(resultCode => {
                if (resultCode === 0) {
                    dispatch(acceptFollow(userId))
                }
                dispatch(switchFollowingProgress(false, userId))
            }
        )
    }
}

export default usersReducer
