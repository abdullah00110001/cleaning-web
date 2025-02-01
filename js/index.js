const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
};

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });

    // Toggle sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



$(document).ready(function(){
    $('.carousel').carousel({
        dist: 0,        // Keeps all items at the same distance (prevents left/right shifting)
        padding: 50,    // Adds some padding for a smoother effect
        fullWidth: false,
        indicators: true // Adds dots for better navigation
    });

    // Auto-slide every 3 seconds (Optional)
    setInterval(function(){
        $('.carousel').carousel('next');
    }, 3000);
});
