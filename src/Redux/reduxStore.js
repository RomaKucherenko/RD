import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import newsReducer from "./newsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    news: newsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

// setInterval(() => window.nMT = store.getState().dialogsPage.newMessageText, 1)
//
// setInterval(() => console.log(window.nMT), 1000)

export default store