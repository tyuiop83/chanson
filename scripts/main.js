// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Player audio
const playButtons = document.querySelectorAll('.play-btn');
const audioPlayer = document.getElementById('audio-player');
const audioElement = document.getElementById('audio-element');
const closePlayer = document.querySelector('.close-player');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const audioFile = button.getAttribute('data-audio');
        audioElement.src = audioFile;
        audioPlayer.classList.add('active');
        audioElement.play();
    });
});

closePlayer.addEventListener('click', () => {
    audioPlayer.classList.remove('active');
    audioElement.pause();
    audioElement.currentTime = 0;
});

// Bouton d'achat
const buyButton = document.getElementById('buy-button');

buyButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Fonctionnalité d\'achat à implémenter. Vous pouvez intégrer PayPal ou Stripe ici.');
    // Ici, vous pourriez rediriger vers une page de paiement ou ouvrir un modal
});

// Animation au défilement
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.lyrics-container, .intro, .conclusion, .shop');
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.8s ease';
        observer.observe(element);
    });
});