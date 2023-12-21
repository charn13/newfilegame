document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("moving-image");
    const stopButton = document.getElementById("stop-button");
    const restartButton = document.getElementById("restart-button");
    let xPosition = window.innerWidth;
    const speed = 5;
    let animationId;

    function moveImage() {
        xPosition -= speed;
        image.style.transform = `translateX(${xPosition}px)`;

        if (xPosition + image.width < 0) {
            xPosition = window.innerWidth;
        }
        
        
        

        // Request the next animation frame
        animationId = requestAnimationFrame(moveImage);
    }

    function startAnimation() {
        // Stop the previous animation (if any)
        cancelAnimationFrame(animationId);

        // Start a new animation
        moveImage();
    }

    function stopAnimation() {
        // Stop the current animation
        cancelAnimationFrame(animationId);
       
    }

    // Start the animation when the page loads
    startAnimation();

    // Restart the animation when the restart button is clicked
    restartButton.addEventListener("click", startAnimation);

    // Stop the animation when the stop button is clicked
    stopButton.addEventListener("click", stopAnimation);

    // Stop the image on any key press
    document.addEventListener("keydown", function () {
        stopAnimation();
    });
    
});
