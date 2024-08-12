document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', function() {
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Animasi Fade-in saat Scroll
    const fadeInElements = document.querySelectorAll('.fade-in');

    window.addEventListener('scroll', checkFadeIn);

    function checkFadeIn() {
        fadeInElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // Efek Ripple pada Button
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            const maxDim = Math.max(this.clientWidth, this.clientHeight);
            ripple.style.width = ripple.style.height = maxDim + 'px';

            const rect = this.getBoundingClientRect();
            ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';

            ripple.addEventListener('animationend', function() {
                ripple.remove();
            });
        });
    });

    // Hover Effect pada Cards
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseout', () => {
            card.style.setProperty('--mouse-x', `50%`);
            card.style.setProperty('--mouse-y', `50%`);
        });
    });
});
