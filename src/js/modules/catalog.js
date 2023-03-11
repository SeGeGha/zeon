const catalog          = document.querySelector('#catalog')
const desktopToggleBtn = document.querySelector('#header .catalog .catalog-btn');
const mobileOpenBtn    = document.querySelector('#menu .catalog .catalog-btn');

const setCatalogHeight = (reset = false) => {
    const header     = document.querySelector('#header');
    const headerRect = header.getBoundingClientRect();

    catalog.style.height = reset ? 'auto' : window.innerHeight - headerRect.height + 'px';
};
const toggleCatalog = () => {
    desktopToggleBtn.closest('.catalog').classList.toggle('opened'); // toggle btn wrap class
    catalog.classList.toggle('opened'); // toggle catalog section class
};
const preselectCategory = (categoryIdx = 0) => {
    const menuItems     = catalog.querySelectorAll('.category-menu .menu-item');
    const categoryItems = catalog.querySelectorAll('.category-details .category-item');

    menuItems.forEach((menuItems, id) => {
        menuItems.classList.toggle('selected', id === categoryIdx);
        categoryItems[id].classList.toggle('opened', id === categoryIdx);
    });
};

desktopToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('locked');

    setCatalogHeight();
    preselectCategory();
    toggleCatalog();
});

mobileOpenBtn.addEventListener('click', () => {
    preselectCategory(-1);
    toggleCatalog();
});

window.addEventListener('resize', () => {
    setCatalogHeight(window.innerWidth < 992);
});

document.querySelector('#catalog').addEventListener('click', (event) => {
    // Step back
    if (event.target.classList.contains('step-back')) {
        event.target.closest('.opened').classList.remove('opened');
        return;
    }
    // Close modal handler
    if (event.target.classList.contains('close-modal')) {
        catalog.querySelectorAll('.opened').forEach(el => el.classList.remove('opened'));
        toggleCatalog();
        return;
    }

    const menuItem = event.target.closest('.menu-item');
    if (!menuItem) return;

    const menuList     = menuItem.closest('.menu-list');
    const details      = menuList.classList.contains('nav-list') ? catalog.querySelector('.category-details') : menuList.closest('.opened');
    const contents     = details.querySelectorAll(menuList.classList.contains('nav-list') ? '.category-item' : '.subcategory-item');
    const categoryName = menuItem.dataset.name;
    if (!categoryName) return;

    menuList.querySelectorAll('.menu-item').forEach((item, id) => {
        item.classList.toggle('selected', item.dataset.name === categoryName);
        contents[id].classList.toggle('opened', contents[id].dataset.name === categoryName);
    });
});
