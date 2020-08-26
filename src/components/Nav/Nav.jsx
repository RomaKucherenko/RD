import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a>Messages</a>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Tabor</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
      <div className={s.item}>
        <a href="https://www.youtube.com/user/fit4liferu" target="_blank">Канал моего ментора</a>
      </div>
    </nav>
  )
}

export default Nav