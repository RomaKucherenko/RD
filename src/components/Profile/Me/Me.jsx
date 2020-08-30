import React from 'react'
import s from './Me.module.css'

const Me = () => {
    return (
        <div className={s.profile_me}>
            <div className="avatar">avatar</div>
            <div className="aboutMe">aboutMe</div>
        </div>
    )
}

export default Me