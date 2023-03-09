// For demo view

window.addEventListener('scroll', (event) => {
    // Add header class "fixed" if scrollY > 0
    document.querySelector('#header').classList.toggle('fixed', !!window.scrollY);
});

// Open mobile menu
document.querySelector('.open-menu').addEventListener('click', (event) => {
    document.body.classList.add('locked');
    event.target.closest('#menu').classList.add('opened');
});

// Close mobile menu
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.target.closest('.opened').classList.remove('opened');

        if (!document.querySelector('.opened')) document.body.classList.remove('locked');

        // TODO: close catalog
    })
})

// Toggle contacts tooltip
document.querySelectorAll('button.tel').forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.target.closest('.contacts').classList.toggle('opened')
    });
})

// Toggle catalog
document.querySelectorAll('.catalog-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
        const catalog    = document.querySelector('#catalog');
        const header     = document.querySelector('#header');
        const headerRect = header.getBoundingClientRect();

        catalog.style.height = window.innerHeight - headerRect.height + 'px';

        document.body.classList.toggle('locked');
        // toggle btn wrap class
        event.target.closest('.catalog').classList.toggle('opened');
        catalog.classList.toggle('opened');
    });
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

window.addEventListener('resize', () => {
    const catalog    = document.querySelector('#catalog');
    const header     = document.querySelector('#header');
    const headerRect = header.getBoundingClientRect();

    catalog.style.height = window.innerHeight - headerRect.height + 'px';
});
