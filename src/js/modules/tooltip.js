const toggler = (wrapper) => {
    const closeHandler = () => {
        wrapper.classList.remove('opened');

        document.body.removeEventListener('click', closeHandler);
    };

    wrapper.classList.toggle('opened');

    if (wrapper.classList.contains('opened')) setTimeout(() => document.body.addEventListener('click', closeHandler));
};

document.querySelectorAll('button.tel').forEach(btn => {
    btn.addEventListener('click', (event) => {
        const contacts = event.target.closest('.contacts');

        toggler(contacts);
    });
});

document.querySelector('.panel-auth > button').addEventListener('click', (event) => {
    const auth = event.target.closest('.panel-auth');

    toggler(auth);
});
