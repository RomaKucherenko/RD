import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';


// Возвращает JSX разметку - Компонента
function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Profile/>
            </div>
            {/*<Profile/>*/}

        </div>
    )
}


export default App;

