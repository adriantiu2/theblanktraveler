// Get all text elements
const texts = document.querySelectorAll('.text');

// Calculate the angle between each text element
const angleIncrement = 360 / texts.length;

// Set initial rotation angle
let rotationAngle = 0;

// Function to update rotation
function updateRotation() {
    texts.forEach((text, index) => {
        // Calculate rotation for each text element
        const rotation = rotationAngle + index * angleIncrement;
        // Apply rotation transformation
        text.style.transform = `rotate(${rotation}deg) translate(120px) rotate(-${rotation}deg)`;
    });
}

// Function to handle wheel event
function handleWheel(event) {
    // Calculate the amount of rotation based on wheel delta
    const delta = event.deltaY;
    const rotationSpeed = 0.2; // Adjust rotation speed as needed
    rotationAngle += delta * rotationSpeed;
    // Update rotation
    updateRotation();
    // Prevent default scrolling behavior
    // event.preventDefault();
}

// Add wheel event listener to the window
window.addEventListener('scroll', handleWheel);

// Simulate initial scroll value between 3 and 1000
window.addEventListener('load', () => {
    // Generate a random number between 3 and 1000
    const initialScroll = Math.floor(Math.random() * (100000000000000 - 99999999999 + 1));
    
    // Create a new WheelEvent with the random deltaY
    const initialEvent = new WheelEvent('scroll', {
        deltaY: initialScroll
    });

    // Dispatch the WheelEvent on the window
    window.dispatchEvent(initialEvent);
});

// Function to handle touch move event
function handleTouchMove(event) {
    // Prevent default touch behavior
    event.preventDefault();
    
    // Calculate the amount of rotation based on touch movement
    const touchDelta = event.touches[0].clientY - startY;
    rotationAngle += touchDelta * rotationSpeed;
    // Update rotation
    updateRotation();
}

let startY;

// Add touch events listeners to the window
window.addEventListener('touchstart', (event) => {
    // Store the initial touch position
    startY = event.touches[0].clientY;
});

window.addEventListener('touchmove', handleTouchMove);


