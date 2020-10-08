import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import HeaderImage from "../../assets/avatars/RD.jpg"
import Preloader from "../common/Preloader/Preloader";


const Header = (props) => {
    return (
        <header className={s.Header}>
            <NavLink to="">
                <img src={HeaderImage} alt=""/>
            </NavLink>
            <div className={s.loginBlock}>
                {props.isFetching ? <Preloader/> :
                    props.isAuth ?
                        <div>
                            {props.login}
                            <button onClick={props.logout}>LogOut</button>
                        </div>
                        : <NavLink to="/Login">Login</NavLink>}

            </div>
        </header>
    )
}

export default Header