import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                {/*NavLink - компонента, которая возвращает тег <a>, добавляя ему addEventListener,
                который при клике на него меняет url через historyAPI, а так же устанавливает preventDefault,
                т.е. отменяет типичное для ссылок перенаправление на другую страницу*/}
                <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Users" activeClassName={s.active}>Users</NavLink>
            </div>
            <br/>
            <div className={s.item}>
                <NavLink to="/News" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>

            <div className={s.item}>
                <a>Settings</a>
            </div>
            <div className={s.item}>
                <a href="https://www.youtube.com/user/fit4liferu" target="_blank" rel="noopener noreferrer">Канал моего
                    ментора</a>
            </div>

        </nav>
    )
}

export default Nav