import React from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav';
import Profile from './components/Profile';



// Возвращает JSX разметку - Компонента
function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <Profile/>
    </div>
  )
}


export default App;

