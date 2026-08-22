// JavaScript logic to inject dynamic glowing pastel/vibrant colors on Skill Cards mouse hover
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    
    // Aesthetic professional color array for frontend grid look
    const developerColors = [
        '#3b82f6', // Bright Blue
        '#a855f7', // Electric Purple
        '#ec4899', // Magenta Pink
        '#f97316', // Neon Orange
        '#14b8a6', // Clean Teal
        '#6366f1'  // Indigo Tint
    ];

    skillCards.forEach((card, index) => {
        const designatedColor = developerColors[index % developerColors.length];

        // Activate background fill color when mouse moves over the boundary
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
            card.style.backgroundColor = designatedColor;
            card.style.borderColor = designatedColor;
        });

        // Gently discharge back to original pristine white state on mouse exit
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
            card.style.backgroundColor = ''; 
            card.style.borderColor = '';
        });
    });
});
// JavaScript
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});