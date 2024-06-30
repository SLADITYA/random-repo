/*
function step1 (val) 
{
    setTimeout(() =>
    {
        return val + 1;
    }, 1000);
}

function step2 (val) 
{
    return val + 2;
}

function step3 (val) 
{
    return val + 3;
}

function doOperation () 
{
    let result = 0;

    result = step1(result);    // 1
    result = step2(result);    // 3
    result = step3(result);    // 6

    console.log(`Result: ${result}`);
}

doOperation();
*/

function step1 (val, callback) 
{
    setTimeout(() =>
    {
        val += 1;
        callback(val);
    }, 1000)    
}

function step2 (val, callback)
{
    callback(val + 2);
}

function step3 (val, callback)
{
    callback(val + 3);
}

// Callback hell or Pyramid of doom

function doOperation ()
{
    step1(0, (res1) =>
    {
        step2(res1, (res2) =>
        {
            step3(res2, (res3) =>
            {
                console.log(res3);
            })
        })
    })
}

doOperation();