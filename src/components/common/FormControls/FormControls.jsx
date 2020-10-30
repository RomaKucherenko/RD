import React from "react";
import s from "./FormControls.module.css"

const FormControl = Element => ({input, meta:{error, touched}, ...props}) => {
    let hasError = error && touched
    return (
        <div>
            <div>
                <Element {...input} {...props} />
            </div>
            <div>
                {  hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const TextArea = FormControl("textarea")
export const Input = FormControl("input")
// const Element_1213 = Element => ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={ s.formControl + " " + (hasError ? s.error : "") }>
//             <Element {...input} {...props} />
//             { hasError && <span> { meta.error } </span> }
//         </div>
//     );
// };
//
//
// const Textarea = Element("textarea");

// <Field component={Textarea} .../>