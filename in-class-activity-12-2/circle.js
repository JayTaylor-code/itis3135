let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let circleX = 50;

// Added in
let angle = 0;

window.requestAnimationFrame(drawFrame);

function drawFrame() {   
   context.clearRect(0, 0, canvas.width, canvas.height);
   context.save();
   
   // Added in
   context.translate(circleX, 50);
   context.rotate(angle);

   context.beginPath();
   
   // Edited
   context.arc(0, 0, 30, 0, 2 * Math.PI);

   context.fillStyle = "red";
   context.fill();
 
   // Added in
   context.lineWidth = 2;
   context.strokeStyle = "blue";
   context.stroke();

   // Added in
   context.beginPath();
   context.strokeStyle = "yellow";
   context.lineHeight = 2;

   // Added in
   context.moveTo(-20, 0);
   context.lineTo(20, 0);

   // Added in
   context.moveTo(0, -20);
   context.lineTo(0, 20);

   // Added in
   context.stroke();

   context.restore();

   circleX++;

   // Added in
   angle += 0.05;

   if (circleX < 150) {
      window.requestAnimationFrame(drawFrame);
   }
}
