// Optionally, add JavaScript for dynamic features
// Example: Animate the logo or links on page load
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo svg');
    if (logo) {
        logo.style.opacity = 0;
        logo.style.transform = 'scale(0.8)';
        setTimeout(() => {
            logo.style.transition = 'opacity 0.7s, transform 0.7s';
            logo.style.opacity = 1;
            logo.style.transform = 'scale(1)';
        }, 120);
    }
});
