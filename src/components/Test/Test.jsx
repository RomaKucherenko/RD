import React, {useEffect, useState} from "react";

const Test = (props) => {
    console.log(`Test`)
    const [count, setCount] = useState(0);

    useEffect(() => {
        // setTimeout(() => {
        //     console.log(`You clicked ${count} times`);
        // }, 3000);
        console.log(`You clicked ${count} times`)
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