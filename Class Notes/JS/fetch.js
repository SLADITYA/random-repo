/*
fetch('https://dummyjson.com/products')  // fetch always returns a promise
    
// .then(data => console.log(data));     // data is not in the json format
    
    .then(data => data.json())
    .then(res => console.log(res));
*/

// async_await - readable and code looks like synchronous

async function fetchData()
{
    const data = await fetch('https://dummyjson.com/products');
    const res = await data.json();
    console.log(res);
}

fetchData();