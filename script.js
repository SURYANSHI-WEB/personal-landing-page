// Wait for the page to load
window.addEventListener('DOMContentLoaded', () => {
    // Select the main sections
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    const footer = document.querySelector('footer');

    // Add fade-in class
    header.classList.add('fade-in');
    hero.classList.add('fade-in');
    footer.classList.add('fade-in');
});