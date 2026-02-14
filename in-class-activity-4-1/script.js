let whiteBtn = document.getElementById("white-btn");
whiteBtn.addEventListener("click", function() {
    changeTextColor("white");
});
         
let greenBtn = document.getElementById("green-btn");
greenBtn.addEventListener("click", function() {
    changeTextColor("green");
});         

let redBtn = document.getElementById("red-btn");
redBtn.addEventListener("click", function() {
    changeTextColor("red");
}); 

function changeTextColor(newColor) {
    let heading = document.getElementById("bike-heading");
    heading.style.color = newColor;
}

