// Simple password protection
const password = prompt("Please enter the password to access this site:");
const correctPassword = "Orab1!"; // Replace with your desired password

if (password !== correctPassword) {
    document.body.innerHTML = "Access Denied! Reload the page to try again.";
} else {
    document.body.style.display = "block"; // Show content after successful login
}
