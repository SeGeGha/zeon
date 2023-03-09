import ('./modules/catalog.js')
import ('./modules/mobile-menu.js');
import ('./modules/contacts-tooltip.js');

window.addEventListener('scroll', (event) => {
    // Add header class "fixed" if scrollY > 0
    document.querySelector('#header').classList.toggle('fixed', !!window.scrollY);
});

