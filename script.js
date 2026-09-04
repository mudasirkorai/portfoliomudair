const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}


// Theme Toggle
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }

});


// Mobile Navigation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});