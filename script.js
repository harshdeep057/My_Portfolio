// ====================toggle icon navbar ========================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// ====================Scroll Section active link ========================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a'); // target your .navbar links

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            let activeLink = document.querySelector('.navbar a[href="#' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    });
    // ====================Sticky Navbar ========================
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // ====================remove toggle icon and navbar when click navbar libk(scroll)========================

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

 // ====================Scroll reveal ========================
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-container,.skills-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


 // ====================typed js ========================
 const typed = new Typed('.multiple-text',  {
    strings: ['Python Developer', 'Backend Developer', 'Data Scientist'],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 100,
    loop: true
 });

 // Automatically update the copyright year
document.getElementById('copyright-year').textContent = new Date().getFullYear();