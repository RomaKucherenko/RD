import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {Route} from "react-router-dom";
import {withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import NewsContainer from "./components/News/NewsContainer";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";


// Возвращает JSX разметку - Функциональная Компонента
class App extends React.Component {
    componentDidMount() {
        //Что я хочу?
        //При переходе на rd.сom приложение isAuth ? rd.сom/News : rd.сom/Login
        //А сейчас получается так, что App даже не рендерится, что не позволяет нам настроить Routы
        this.props.initializeApp()
        console.log(`App DidMount`)
    }

    render() {
        console.log(`App Render`, this.props)
        if (this.props.isAuth) {
            if (!this.props.isInitialized) {
                return <Preloader/>
            }
            return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                        {/*Вопросик означает что этот параметр необязательный
                т.е., Route отрисует Profile, если userId не передан*/}
                        <Route path="/Users" render={() => <UsersContainer/>}/>
                        <Route path="/News" render={() => <NewsContainer/>}/>
                        <Route path="/Login" render={() => <Login/>}/>
                    </div>
                </div>
            )
        }
        return <Login/>
    }
}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized,
        isAuth: state.auth.isAuth
    }
}
const appCompose = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
export default appCompose;

