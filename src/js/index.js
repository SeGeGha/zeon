const contactsBtns = document.querySelectorAll('button.tel');

contactsBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const contactsWrap = event.target.closest('.contacts');

        contactsWrap.classList.toggle('opened')
    });
})

const catalogBtns = document.querySelectorAll('.catalog-btn');

catalogBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const catalog    = document.querySelector('#catalog');
        const header     = document.querySelector('#header');
        const headerRect = header.getBoundingClientRect();

        catalog.style.height = window.innerHeight - headerRect.height + 'px';

        document.body.classList.toggle('locked');
        event.target.closest('.catalog').classList.toggle('opened');
        catalog.classList.toggle('opened');
    });
})

window.addEventListener('scroll', (event) => {
    document.querySelector('#header').classList.toggle('fixed', !!window.scrollY);
});

const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', (event) => {
   const menuWrap = event.target.closest('#menu');

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

document.body.addEventListener('resize', () => {
   // close category, menu
});
