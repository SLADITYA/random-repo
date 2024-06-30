// Closure - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// setTimeouts, Event Handlings

function z()
{
    let b = 800;

    function x()
    {
        let a = 7;

        function y()
        {
            console.log(a, b);
        }

        y();
    }

    x();
}

z();