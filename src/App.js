import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import NewsContainer from "./components/News/NewsContainer";


// Возвращает JSX разметку - Функциональная Компонента
function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path="/Dialogs" render={() => <DialogsContainer />}/>
                <Route path="/Profile/:userId?" render={() => <ProfileContainer />}/>
                {/*Вопросик означает что этот параметр необязательный
                т.е., Route отрисует Profile, если userId не передан*/}
                <Route path="/Users" render={() => <UsersContainer />}/>
                <Route path="/News" render={() => <NewsContainer />}/>
                <Route path="/Login" render={() => <Login />}/>
            </div>
        </div>
    )
}


export default App;

