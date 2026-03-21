let whiteBtn = document.getElementById("white-btn");
whiteBtn.addEventListener("click", function() {
   changeHeadingBgColor("white");
});

let greenBtn = document.getElementById("green-btn");
greenBtn.addEventListener("click", function() {
   changeHeadingBgColor("green");
});         

let redBtn = document.getElementById("red-btn");
redBtn.addEventListener("click", function() {
   changeHeadingBgColor("red");
}); 

let purpleBtn = document.getElementById("purple-btn");
purpleBtn.addEventListener("click", function() {
   changeHeadingBgColor("purple");
});

function changeHeadingBgColor(newColor) {
   let heading = document.getElementById("bike-heading");
   heading.style.backgroundColor = newColor;
}