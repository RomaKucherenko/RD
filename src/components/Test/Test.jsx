import React, {useEffect, useState} from "react";

const Test = (props) => {
    return (
        <Child1>
            <Child2/>
        </Child1>
    )
}

const Child1 = (props) => {
    debugger
    return <div>
        1
    </div>
}

const Child2 = (props) => {
    return <div>
        <div>{props.name}</div>
    </div>
}

export default Test