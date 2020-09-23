import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

// setInterval(() => window.nMT = store.getState().dialogsPage.newMessageText, 1)
//
// setInterval(() => console.log(window.nMT), 1000)

export default store