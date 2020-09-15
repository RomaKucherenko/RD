import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


// Возвращает JSX разметку - Компонента
function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path="/Dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/Profile" render={() => <Profile store={props.store}/>}
                />
            </div>
        </div>

    )
}


export default App;

