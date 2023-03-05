const contactsBtn = document.querySelector('button.tel');

contactsBtn.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('opened')
});

const catalogyBtn = document.querySelector('button.catalogy');

catalogyBtn.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('opened')
})
