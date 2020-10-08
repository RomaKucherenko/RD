import React from "react";
import Redirect from "react-router-dom/es/Redirect";


const WithProfileRedirect = (Component) => {
    return (props) => {
            if(!props.match.params.userId) {
                return <Redirect to={`/Profile/${props.myId}`}/>
            }
        return <Component {...props}/>
    }
}

export default WithProfileRedirect