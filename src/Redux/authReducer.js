const SWITCH_FETCHING_STATUS = `SWITCH_FETCHING_STATUS`
const SET_USER_DATA = `SET_USER_DATA`

let initialState = {
    userId: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    //Reducer только изменяет STATE, вызывать callSubscriber
    //мы не будем, тк это не наша responsibility, наша только в том
    //чтобы изменить STATE. Subscriber должен следить за этим изменением
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: true
            }
        case SWITCH_FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}


export const switchFetchingStatus = (isFetching) => ({type: SWITCH_FETCHING_STATUS, isFetching})
export const setUserData = (userId, login) => ({type: SET_USER_DATA, userData:{userId, login}})


export default usersReducer
