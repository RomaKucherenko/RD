import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(reducers)

// setInterval(() => window.nMT = store.getState().dialogsPage.newMessageText, 1)
//
// setInterval(() => console.log(window.nMT), 1000)

export default store