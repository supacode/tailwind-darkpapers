const menuBtn = document.querySelector('#toggle-menu');
const mainNav = document.querySelector('#main-nav');

if (menuBtn) {
    menuBtn.addEventListener('click', () => mainNav.classList.toggle('hidden'));
}