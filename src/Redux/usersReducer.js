const FOLLOW = `FOLLOW`
const UNFOLLOW = `UNFOLLOW`
const SET_USERS = `SET_USERS`
const SET_PAGE_NUMBER = `SET_PAGE_NUMBER`

let initialState = {
    users: [],
    pageNumber: 1
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
        default:
            return state
    }
}

export const followCreator = (userId) => ({type: FOLLOW, userId: userId})
export const unfollowCreator = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersCreator = (users) => ({type: SET_USERS, users: users})
export const setPageNumberCreator = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber})


export default usersReducer
