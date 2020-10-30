import {authAttempt} from "./authReducer";

const INITIALIZED_SUCCESS = `app/INITIALIZED_SUCCESS`

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
    //Мне нужно узнать когда выполнится ауторизация
    //Из-за того что от authAttempt мне нужно получить
    //promise, то я обязан вызвать dispatch
    //Dispatch возвращает то же что и Thunk'a
    let authPromise = dispatch(authAttempt())
    //Используем .all, тк наша инициализация может состоять из таких процессов как
    // выбор языка сайта
    Promise.all([authPromise]).then(
        dispatch(initializeSuccess())
    )
}


export default appReducer
