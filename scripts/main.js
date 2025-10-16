// Wait for the entire HTML page to be loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Find the button with the id "contactButton"
    const contactButton = document.getElementById('contactButton');

    // Add an event listener that waits for a click
    contactButton.addEventListener('click', function() {
        // When the button is clicked, show a simple pop-up message
        alert('Thank you for your interest! Please email me at your-email@example.com');
    });

});