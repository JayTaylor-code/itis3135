const ball = document.getElementById('ball');
const container = document.getElementById('container');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let animationId;

// Physics variables
let y = 0;
let vy = 0;
const gravity = 0.5;

// Settings
const ballSize = 50;
let groundY = container.clientHeight - ballSize;

// Update ground level on resize
window.addEventListener('resize', () => {
    groundY = container.clientHeight - ballSize;
    if (!animationId && y > groundY) {
        y = groundY;
        ball.style.top = `${y}px`;
    }
});

function animate() {
    vy += gravity;
    y += vy;

    // Bounce off the ground
    if (y > groundY) {
        y = groundY;
        // Infinite bounce with a consistent upward velocity
        vy = -18;
    }

    ball.style.top = `${y}px`;

    // Adjust shadow based on height for a pseudo-3D effect
    const shadowBlur = Math.max(10, 30 - (y / groundY) * 20);
    const shadowSpread = Math.max(-3, 5 - (y / groundY) * 8);
    ball.style.boxShadow = `0 ${Math.max(10, 25 - (y / groundY) * 15)}px ${shadowBlur}px ${shadowSpread}px rgba(239, 68, 68, 0.4)`;

    animationId = requestAnimationFrame(animate);
}

startBtn.addEventListener('click', () => {
    if (!animationId) {
        // If it's resting on the ground, give it an initial upwards velocity
        if (y >= groundY - 1) {
            vy = -18; // Initial jump
        }
        animate();
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
});

stopBtn.addEventListener('click', () => {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
});

// Initial setup
ball.style.top = `${y}px`;