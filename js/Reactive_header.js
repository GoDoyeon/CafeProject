const toggleBtn = document.querySelector('.header__toogleBtn');
const menu = document.querySelector('.header__menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});