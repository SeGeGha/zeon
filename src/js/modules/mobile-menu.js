const openBtn  = document.querySelector('.open-menu');
const closeBtn = document.querySelector('#menu .menu-main > .close-modal');

openBtn.addEventListener('click', (event) => {
    document.body.classList.add('locked');
    event.target.closest('#menu').classList.add('opened');
});

closeBtn.addEventListener('click', (event) => {
    document.body.classList.remove('locked');
    event.target.closest('.opened').classList.remove('opened');
});
