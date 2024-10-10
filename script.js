// Navbar hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fade-in effect for hero content
window.addEventListener('load', () => {
    document.querySelector('.hero-content').style.opacity = '1';
    document.querySelector('.hero-content').style.transform = 'translateY(0)';
});