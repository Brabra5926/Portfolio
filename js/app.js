





//Listener pour faire apparaitre les compétences quand elles sont visibles
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Pour arréter l'animation une fois qu'elle a été jouée
            }
        });
    }, {
        threshold: 0.5 // apparait quand 50% de l'élément est visible
    });

    skills.forEach(skill => {
        observer.observe(skill);
    });
});


// Barre de progression de la page
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
});