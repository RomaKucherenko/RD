import {authAttempt} from "./authReducer";

const INITIALIZED_SUCCESS = `INITIALIZED_SUCCESS`

let initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {

    //Reducer только изменяет STATE, вызывать callSubscriber
    //мы не будем, тк это не наша responsibility, наша только в том
    //чтобы изменить STATE. Subscriber должен следить за этим изменением
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}


export const initializeSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
        //Из-за того что от authAttempt мне нужно получить
        //promise, то я обязан вызвать dispatch
        //Dispatch возвращает то же что и Thunk'a
        let authPromise = dispatch(authAttempt())
        Promise.all([authPromise]).then(
            dispatch(initializeSuccess())
        )
}


export default appReducer
