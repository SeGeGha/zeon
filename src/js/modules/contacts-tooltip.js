document.querySelectorAll('button.tel').forEach(btn => {
    btn.addEventListener('click', (event) => {
        const contacts     = event.target.closest('.contacts');
        const closeHandler = () => {
            contacts.classList.remove('opened');

            document.body.removeEventListener('click', closeHandler);
        };

        contacts.classList.toggle('opened');

        if (contacts.classList.contains('opened')) setTimeout(() => document.body.addEventListener('click', closeHandler));
    });
});
