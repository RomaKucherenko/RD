import {followAPI, usersAPI} from "../dalAPI/dalAPI";
import {updateObjInArray} from "../utils/objectHelpers";

const FOLLOW = `users/FOLLOW`
const UNFOLLOW = `users/UNFOLLOW`
const SET_USERS = `users/SET_USERS`
const SET_PAGE_NUMBER = `users/SET_PAGE_NUMBER`
const SWITCH_FETCHING_STATUS = `users/SWITCH_FETCHING_STATUS`
const SWITCH_FOLLOWING_PROGRESS = `users/SWITCH_FOLLOWING_PROGRESS`

let initialState = {
    users: [],
    isFetching: false,
    totalUsersCount: 0,
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
                users: updateObjInArray(state.users, 'id', action.userId, {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjInArray(state.users, 'id', action.userId, {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
                totalUsersCount: action.totalUsersCount
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
export const setUsers = (users, totalUsersCount) => ({type: SET_USERS, users, totalUsersCount})
export const setPageNumber = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber})
export const switchFetchingStatus = (isFetching) => ({type: SWITCH_FETCHING_STATUS, isFetching})
export const switchFollowingProgress = (isFollowing, userId) => ({type: SWITCH_FOLLOWING_PROGRESS, isFollowing, userId})

export const requestUsers = (pageNumber = 1) => {
    return async (dispatch) => {
        dispatch(switchFetchingStatus(true))

        let data = await usersAPI.requestUsers(pageNumber)

        dispatch(switchFetchingStatus(false))
        let {items, totalCount} = data
        dispatch(setUsers(items, totalCount))
    }
}
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(switchFollowingProgress(true, userId))
    let resultCode = await apiMethod(userId)
    if (resultCode === 0) {
        dispatch(actionCreator(userId))

        dispatch(switchFollowingProgress(false, userId))
    }

}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId,
            followAPI.unfollow.bind(followAPI), acceptUnfollow)
    }
}
export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId,
            followAPI.follow.bind(followAPI), acceptFollow)

    }
}

export default usersReducer
