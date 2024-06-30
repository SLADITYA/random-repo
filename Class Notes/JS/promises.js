// Pending, fulfilled, rejected

let myPromise = new Promise(function(resolve, reject)
{
    let isBool = true;

    if (isBool) 
    {
        resolve("Promise is resolved");    
    }
    else
    {
        reject("Promise is rejected");
    }
})

console.log(myPromise);     // myPromise -> Object

myPromise.then((result) => console.log(result));    // executed when promise is fulfilled

myPromise.catch((error) => console.log(error));     // executed when promise is rejected