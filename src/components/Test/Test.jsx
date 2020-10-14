import React, {useEffect, useState} from "react";
import {subscribe, unsubscribe} from "./TestApi";

const Test = (props) => {
    console.log(`Test`)
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`You clicked ${count} times`)
        subscribe()
        return _ => unsubscribe()
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Test