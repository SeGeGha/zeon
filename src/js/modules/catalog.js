const catalog          = document.querySelector('#catalog')
const desktopToggleBtn = document.querySelector('#header .catalog .catalog-btn');
const mobileOpenBtn    = document.querySelector('#menu .catalog .catalog-btn');
const mobileCloseBtn   = document.querySelector('#catalog .close-modal');

const setCatalogHeight = (reset = false) => {
    const header     = document.querySelector('#header');
    const headerRect = header.getBoundingClientRect();

    catalog.style.height = reset ? 'auto' : window.innerHeight - headerRect.height + 'px';
};
const toggleCatalog = (toggler, force) => {
    [
        desktopToggleBtn,
        mobileOpenBtn,
    ].forEach(btn => btn.closest('.catalog').classList.toggle('opened', force)); // toggle btn wrap class
    catalog.classList.toggle('opened', force); // toggle catalog section class
};

desktopToggleBtn.addEventListener('click', (event) => {
    document.body.classList.toggle('locked');

    setCatalogHeight();
    toggleCatalog(event.currentTarget);
});

mobileOpenBtn.addEventListener('click', (event) => toggleCatalog(true));
mobileCloseBtn.addEventListener('click', () => toggleCatalog(false));

window.addEventListener('resize', () => {
    setCatalogHeight(window.innerWidth < 992);
});

// Toggle category
document.querySelector('.menu-list').addEventListener('click', (event) => {
    const menuItem = event.target.closest('.menu-item');
    if (!menuItem) return;

    const menuItems = event.currentTarget.querySelectorAll('.menu-item');
    const contents  = document.querySelectorAll('.category-item');

    menuItems.forEach((item, id) => {
        const content      = contents[id];
        const categoryName = menuItem.dataset.name;

        item.classList.toggle('selected', item.dataset.name ===categoryName);
        content.classList.toggle('opened', content.dataset.name === categoryName);
    });
});

