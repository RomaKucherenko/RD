import React from "react";
import s from './Info.module.css'

const Info = ( props ) => {
    return (
        <div className={s.Info}>
            <button className={s.count}>{props.count}</button>
            <button className={s.delete}><img src="https://lh3.googleusercontent.com/proxy/HiL9KY9sDH4eodHjaE3Hp3XqayL4JVsUToUgVphGB8xc5AePYTfhWagVEdxonNK2jQWfgM0wfYeOY303c77TUeEEZ-0mSvppZ7jbZZXRBQxI2B2HdvvhtblHH1bzjA" alt=""/></button>

        </div>
    )
}

export default Info