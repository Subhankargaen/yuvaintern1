// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Toggle navigation menu on mobile
    navToggle.addEventListener('click', () => {
        // Add or remove 'active' class to toggle visibility
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const expanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', expanded);
    });

    // Close menu when a navigation link is clicked
    const navLinks = document.querySelectorAll('.nav-list li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
