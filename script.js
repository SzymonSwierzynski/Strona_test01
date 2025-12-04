const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('nav--open');
    });
}console.log('Happy developing ✨')
