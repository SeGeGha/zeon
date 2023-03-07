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
});

const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', (event) => {
   const menuWrap = event.target.closest('.menu');

   document.body.classList.add('locked');
   menuWrap.classList.toggle('opened');
});

const closeBtns = document.querySelectorAll('.close-btn')

Array.from(closeBtns).forEach(btn => {
    btn.addEventListener('click', (event) => {
        const wrap = event.target.closest('.opened');

        wrap.classList.toggle('opened');
        document.body.classList.remove('locked');
    })
})
