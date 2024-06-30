// import { useState } from "react";

function Button(props) {

    /*
    const [count, setCount] = useState(0);

    function handleClick ()      // Event Handling 
    {
        console.log("Button Clicked");
        setCount(count + 1);
        console.log(count);
    }
    */
   
    const {click, count} = props.property;

    return (
        <button onClick={click}>Button Clicked {count} times</button>
    )
}

export default Button;