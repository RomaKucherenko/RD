import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const [count, setCount] = useState(0);
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onChange = (e) => {
        setStatus(e.target.value)
    }
    return <div>
        {editMode ?
            <input onBlur={deactivateEditMode} value={status}
                   onChange={onChange} autoFocus={true}/>
            :
            <span onClick={activateEditMode}>
                {status ? status : "````"}
            </span>
        }
    </div>

}
//Обёртываем её для того чтобы производился lifeCycleMethod sCU
export default React.memo(ProfileStatus)