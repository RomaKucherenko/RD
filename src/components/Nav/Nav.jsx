import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
            <a href="/Profile">Profile</a>
        </div>
      <div className={s.item}>
        <a href="/Messages">Messages</a>
      </div>
      <div className={s.item}>
        <a href="#h">News</a>
      </div>
      <div className={s.item}>
        <a href="#h">Music</a>
      </div>

      <div className={s.item}>
        <a href="#h">Settings</a>
      </div>
      <div className={s.item}>
        <a href="https://www.youtube.com/user/fit4liferu" target="_blank" rel="noopener noreferrer">Канал моего ментора</a>
      </div>
    </nav>
  )
}

export default Nav