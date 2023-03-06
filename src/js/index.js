const contactsBtns = document.querySelectorAll('button.tel');

contactsBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const contactsWrap = event.target.closest('.contacts');

        contactsWrap.classList.toggle('opened')
    });
})

const catalogBtn = document.querySelector('.catalog-btn');

catalogBtn.addEventListener('click', (event) => {
    const catalogWrap = event.target.closest('.catalog');

    catalogWrap.classList.toggle('opened');
});

window.addEventListener('scroll', (event) => {
    document.querySelector('#header').classList.toggle('fixed', !!window.scrollY);
})
