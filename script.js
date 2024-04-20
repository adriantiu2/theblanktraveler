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



// // Function to check if the user is on a mobile device
// function isMobileDevice() {
//     return window.innerWidth <= 768; // Adjust the breakpoint as needed
// }

// // Function to adjust the translate value based on the device type
// function adjustTranslateValue() {
//     const texts = document.querySelectorAll('.text');
//     const translateValue = isMobileDevice() ? 100 : 200; // Adjust as needed

//     texts.forEach((text, index) => {
//         const rotation = index * (360 / texts.length);
//         const translateX = Math.cos(rotation * Math.PI / 180) * translateValue;
//         const translateY = Math.sin(rotation * Math.PI / 180) * translateValue;

//         text.style.transform = `translate(${translateX}px, ${translateY}px)`;
//     });
// }

// // Call the function to adjust the translate value initially
// adjustTranslateValue();

// // Listen for window resize event to adjust translate value if necessary
// window.addEventListener('resize', adjustTranslateValue);
