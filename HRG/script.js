document.addEventListener("DOMContentLoaded", function() {
    // Ensure the body fade-in effect is applied

    // Add a slight delay to ensure the overlay and text animations are visible
    setTimeout(function() {
        document.querySelector('.black-overlay').classList.add('visible');
    }, 100); // Delay to ensure the overlay transition is visible

    setTimeout(function() {
        document.querySelector('.presText').classList.add('animate');
    }, 200); // Delay to ensure the text animation is visible

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('roll-in-bottom')) {
                entry.target.classList.add('roll-in-bottom');
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    document.querySelectorAll('.frameDiv').forEach(frame => {
        observer.observe(frame);
    });
});