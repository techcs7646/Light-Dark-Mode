// Get the toggle button element
const toggleBtn = document.getElementById("toggleBtn");

// Add an event listener to the button to listen for clicks
toggleBtn.addEventListener("click", () => {
  // Toggle dark mode class only (no need for both)
  document.body.classList.toggle("dark-mode");
  
  // Change button text based on the current mode
  toggleBtn.textContent = document.body.classList.contains("dark-mode") 
    ? "Switch to Light Mode" 
    : "Switch to Dark Mode";
});

// Set initial mode
document.body.classList.add("light-mode");
toggleBtn.textContent = "Switch to Dark Mode";
