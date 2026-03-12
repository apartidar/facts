// Theme toggle
document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('light-mode');
};

// Scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting));
});
document.querySelectorAll('section').forEach(s => observer.observe(s));
