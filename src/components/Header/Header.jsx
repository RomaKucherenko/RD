import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import HeaderImage from "../../assets/avatars/RD.jpg"
import Preloader from "../Preloader/Preloader";


const Header = (props) => {
    return (
        <header className={s.Header}>
            <NavLink to="">
                <img src={HeaderImage} alt=""/>
            </NavLink>
            <div className={s.loginBlock}>
                {props.isFetching ? <Preloader/> :
                    props.isAuth ? props.login : <a>Login</a>}

            </div>
        </header>
    )
}

export default Header