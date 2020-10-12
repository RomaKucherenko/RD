import React from "react";
import Redirect from "react-router-dom/es/Redirect";


const WithProfileRedirect = (Component) => {
    return (props) => {
            console.log(!props.match.params.userId)
            if(!props.match.params.userId) {
                return <Redirect to={`/Profile/${props.myId}`}/>
            }
        return <Component {...props}/>
    }
}

export default WithProfileRedirect