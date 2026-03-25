let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let circleX = 50;

window.requestAnimationFrame(drawFrame);

function drawFrame() {   
   context.clearRect(0, 0, canvas.width, canvas.height);
   context.save();
   
   context.beginPath();   
   context.arc(circleX, 50, 30, 0, 2 * Math.PI);
   context.fillStyle = "red";
   context.fill();
 
   context.restore();

   circleX++;
   if (circleX < 150) {
      window.requestAnimationFrame(drawFrame);
   }
}

