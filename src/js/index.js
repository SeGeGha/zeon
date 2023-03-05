const contactsBtn = document.querySelector('button.tel');

contactsBtn.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('opened')
});
