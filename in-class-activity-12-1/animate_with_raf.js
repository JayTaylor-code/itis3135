let animationId = null;

window.addEventListener("DOMContentLoaded", function() {
   document.addEventListener("click", startAnimation);
});

function startAnimation(e) {

   // Get mouse coordinates
   let clickX = e.clientX;
   let clickY = e.clientY;

   // Cancel any existing animation
   if (animationId !== null) {
      cancelAnimationFrame(animationId);
   }

   // Start animation
   animate(clickX, clickY);
}

function animate(targetX, targetY) {
   const img = document.querySelector("img");
   const cs = getComputedStyle(img);

   let imgX = parseInt(cs.left);
   let imgY = parseInt(cs.top);

   // Adjust so the TIP of the heart reaches the click
   const destX = Math.round(targetX - (img.width / 2));
   const destY = Math.round(targetY - (img.height - 20));

   // Stop when destination is reached
   if (imgX === destX && imgY === destY) {
      animationId = null;
      return;
   }

   // Control speed (increase step for faster movement)
   let step = 5;  // try 1 (slow), 2 (normal), 5+ (fast)

   // Move X without overshooting
    if (Math.abs(destX - imgX) <= step) {
        imgX = destX;
    }
    else if (imgX < destX) {
        imgX += step;
    }
    else {
        imgX -= step;
    }

// Move Y without overshooting
if (Math.abs(destY - imgY) <= step) {
   imgY = destY;
} else if (imgY < destY) {
   imgY += step;
} else {
   imgY -= step;
}

   img.style.left = imgX + "px";
   img.style.top = imgY + "px";

   // Continue animation
   animationId = requestAnimationFrame(function() {
      animate(targetX, targetY);
   });
}