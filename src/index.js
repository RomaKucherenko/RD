import * as serviceWorker from './serviceWorker';
import store from "./Redux/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import StoreContext from "./StoreContext";


let rerenderEntireTree = () => {
    //Document Object Model, сокращённо DOM – объектная модель документа,
    // которая представляет все содержимое страницы в виде объектов,
    // которые можно менять.
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <StoreContext.Provider value={store}>
                    <App/>
                </StoreContext.Provider>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    )
}

rerenderEntireTree()


store.subscribe(rerenderEntireTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
