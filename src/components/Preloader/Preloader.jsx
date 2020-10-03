import React from "react";
import preloader from "../../assets/45.gif"
import s from "./Preloader.module.css"

const Preloader = (props) => {
    return <div className={s.Preloader}>
        <img src={preloader}/>
    </div>
}
export default Preloader