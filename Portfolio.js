//- WELCOME MODAL -
const modal = document.getElementById("welcomeModal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Show modal when page loads
window.addEventListener("load", () => {
    modal.style.display = "flex";
});

// Close modal
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


// - DARK MODE PERSISTENCE -
const darkToggle = document.getElementById("darkModeToggle");

// Check localStorage on load
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkToggle.checked = true;
}

// Toggle dark mode + save preference
darkToggle.addEventListener("change", () => {
    if (darkToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
});
