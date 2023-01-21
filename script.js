var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");

function setgradient(){
    body.style.background="linear-gradient(to right, " + color1.value +", " + color2.value + ")";
}

color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);