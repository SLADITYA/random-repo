// Event Handling Examples

import { useState } from "react";

function Form () {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e)        
    {
        e.preventDefault();
        console.log("Submitted");
        console.log(name);
        console.log(message);
    }


    return(
        <>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <br /><br />
        <textarea onChange={(e) => setMessage(e.target.value)}></textarea>
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>
        <h3>Name is: {name}</h3>
        <h3>Message: {message}</h3>
        </>
    )
}

export default Form;