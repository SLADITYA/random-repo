// HTML is Loaded -> HTML is parsed -> DOM Tree is Created

let startButton = document.getElementById("btn-start");
console.log(startButton);

let stopButton = document.querySelector("#btn-stop");
console.log(stopButton);

let allButtons = document.querySelectorAll(".button");  // returns an array of elements
console.log(allButtons);

let resetButton = allButtons[2];
console.log(resetButton);

// Event Listeners

function showMessage()
{
    console.log("Clicked");
}

// startButton.addEventListener("click", showMessage);

startButton.addEventListener("click", () =>
{
    if (startButton.innerText === "Start") 
    {
        // startButton.innerText = "Begin";    // change the text     

        startButton.innerHTML = "<span>Begin</span>"; 
    }
    else
    {
        startButton.innerText = "Start";
    }
});

// document.body.style.backgroundColor = "red";     // manipulate the background color

stopButton.addEventListener("click", () =>
{
    // stopButton.classList.add("red-btn");
    stopButton.classList.toggle("red-btn");
});

// Event Listeners for Input and Text Fields - change, input, focus, keyup etc

let input = document.querySelector(".input");

input.addEventListener("change", () =>
{
    console.log(input.value);
});

// Creating an HTML element using Javascript

const childDiv = document.createElement("div");

childDiv.textContent = "Learning JS DOM";

document.querySelector("div").appendChild(childDiv);