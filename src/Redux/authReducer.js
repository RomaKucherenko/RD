import {authAPI} from "../dalAPI/dalAPI";
import {stopSubmit} from "redux-form";

const SWITCH_AUTH_FETCHING_STATUS = `SWITCH_AUTH_FETCHING_STATUS`
const SET_USER_DATA = `SET_USER_DATA`

let initialState = {
    userId: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    //Reducer только изменяет STATE, вызывать callSubscriber
    //мы не будем, тк это не наша responsibility, наша только в том
    //чтобы изменить STATE. Subscriber должен следить за этим изменением
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: action.isAuth
            }
        case SWITCH_AUTH_FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}


export const switchAuthFetchingStatus = (isFetching) => ({type: SWITCH_AUTH_FETCHING_STATUS, isFetching})
export const setUserDataAction = (userId, login, isAuth) => ({type: SET_USER_DATA, userData: {userId, login}, isAuth})

export const authAttempt = () => (dispatch) => {
    //return промис который возвращает then
    return authAPI.authAttempt().then(data => {
            if (data.resultCode === 0) {
                let {id, login} = data.data
                dispatch(setUserDataAction(id, login, true))
            }
        }
    )
}
export const login = (email, password, rememberMe) => {
    return dispatch => {
        dispatch(switchAuthFetchingStatus(true))
        authAPI.login(email, password, rememberMe).then(response => {
                if (response.resultCode === 0) {
                    dispatch(authAttempt())
                } else {
                    dispatch(stopSubmit('login', {_error: response.messages[0]}))
                }
                dispatch(switchAuthFetchingStatus(false))
            }
        )
    }
}
export const logout = () => {
    return dispatch => {
        dispatch(switchAuthFetchingStatus(true))
        authAPI.logout().then(response => {
                if (response.resultCode === 0) {
                    dispatch(setUserDataAction(null, null, false))
                }
                dispatch(switchAuthFetchingStatus(false))
            }
        )
    }
}
export default authReducer
