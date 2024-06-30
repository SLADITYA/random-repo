// Javascript is single threaded and synchronous (line by line) but features like event loops, call backs, promises, async_await, makes it asynchronous.

// micro task queue has higher priority than callback queue

// All the browser functions are present in the window object

console.log("Geeks for Geeks");

setTimeout(() =>    // browser function
{
    console.log("Javascript 1");
}, 1000);

setTimeout(() =>    // call back queue
{
    console.log("Javascript 2");
}, 2000);

setTimeout(() =>
{
    console.log("Javascript 3");
}, 0);

console.log("Synchronous");

const promise1 = new Promise((resolve, reject) => resolve(10));    // micro task queue
promise1.then(res => console.log(res));

// All these browser functions in the node are present in global object

/*
function abc() 
{
    console.log(global);
}

abc();
*/