import React from "react";
import s from "./FormControls.module.css"

export const TextArea = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched
    return (
        <div>
            <div>
                <textarea {...input} {...props} className={hasError ? s.Error : ""}/>
            </div>
            <div>
                {  hasError && <span>{meta.error}</span>}
            </div>

        </div>

    )
}
export const Input = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched
    return (
        <div>
            <div>
                <input {...input} {...props} className={hasError ? s.Error : ""}/>
            </div>
            <div>
                {  hasError && <span>{meta.error}</span>}
            </div>

        </div>

    )
}