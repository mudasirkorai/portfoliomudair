document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MOBILE NAVBAR
    // =========================

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {

        // Open / close mobile menu
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("show");
            hamburger.classList.toggle("active");
        });

        // Close menu when a link is clicked
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
                hamburger.classList.remove("active");
            });
        });

    }


    // =========================
    // ACTIVE NAVIGATION
    // =========================

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            link.classList.remove("active");

            const linkTarget = link.getAttribute("href");

            if (linkTarget === `#${currentSection}`) {
                link.classList.add("active");
            }
        });

    });


    // =========================
    // CLOSE MENU WHEN CLICKING OUTSIDE
    // =========================

    document.addEventListener("click", (event) => {

        if (
            navLinks &&
            hamburger &&
            !navLinks.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {
            navLinks.classList.remove("show");
            hamburger.classList.remove("active");
        }

    });


    // =========================
    // ESC KEY CLOSE MENU
    // =========================

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape" && navLinks && hamburger) {
            navLinks.classList.remove("show");
            hamburger.classList.remove("active");
        }

    });

});