// Efek Fade-In saat halaman dimuat
window.addEventListener('load', () => {
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    
    elementsToFadeIn.forEach(element => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s ease';
        element.style.transitionDelay = '0.5s'; // Delay untuk efek animasi
        element.style.opacity = 1;
    });
});

// Efek Paralaks
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const distance = window.scrollY;
        element.style.transform = `translateY(${distance * 0.5}px)`;
    });
});

// Efek Hover
const hoverElements = document.querySelectorAll('.hover-effect');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.1)'; // Perbesar elemen saat hover
        element.style.transition = 'transform 0.5s ease';
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)'; // Kembalikan ukuran elemen saat mouse meninggalkan
    });
});
