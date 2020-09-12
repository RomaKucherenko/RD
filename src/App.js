import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


// Возвращает JSX разметку - Компонента
function App(props) {
    return (

        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path="/Dialogs" render={() => <Dialogs dialogsPage={props.store.state.dialogsPage}
                                                              updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                                                              addMessage={props.store.addMessage.bind(props.store)}/>}/>
                <Route path="/Profile" render={() => <Profile profilePage={props.store.state.profilePage}
                                                              dispatch={props.store.dispatch.bind(props.store)}/>}
                />
            </div>
        </div>

    )
}


export default App;

