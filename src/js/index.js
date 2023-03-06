const contactsBtn = document.querySelector('button.tel');

contactsBtn.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('opened')
});

const catalogBtn = document.querySelector('.catalog-btn');

catalogBtn.addEventListener('click', (event) => {
    const catalogWrap = event.target.closest('.catalog');

    catalogWrap.classList.toggle('opened');
})
