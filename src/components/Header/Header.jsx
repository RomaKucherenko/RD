import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to=""><img src="img/gS.jpg" alt="Иди нахуй" /></NavLink>
        </header>
    )
}

export default Header