document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = `opacity 2s ease ${index * 0.2}s, transform 2s ease ${index * 0.2}s`;
    });

    setTimeout(() => {
        sections.forEach((section) => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        });
    }, 500);
});