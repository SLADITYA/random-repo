// useEffect HOOK

import { useState, useEffect } from "react";

function SampleHook () {
    
    const [count, setCount] = useState(0);

    useEffect (() => {
        // The code we want to run
        console.log("Count is ", count);

        // Optional return function
        return () => {
            console.log("Cleanup Code");
        }
    }, [count]);    // Dependency Array

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br /><br />
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default SampleHook;