// Function to confirm selection
function confirmSelection() {
    // Add your confirmation logic here
    alert('Selection confirmed!');
}

// Function to go back to the previous page
function goBack() {
    window.history.back(); // Navigates back to the previous page
}

// Function to logout
function logout() {
    // Perform logout logic, e.g., clear session, redirect to login page
    window.location.href = '/logout'; // Adjust based on your logout URL
}
