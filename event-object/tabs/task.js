const tabsContainers = document.querySelectorAll('.tabs');

tabsContainers.forEach(container => {
    const tabsNavigation = container.querySelector('.tab__navigation');
    const tabsContents = container.querySelectorAll('.tab__content');

    tabsNavigation.addEventListener('click', (e) => {
        if(e.target.classList.contains('tab')) {
            const index = Array.from(tabsNavigation.children).indexOf(e.target);

            tabsContents.forEach(content => {
                content.classList.remove('tab__content_active');
            });
            tabsNavigation.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('tab_active');
            });

            tabsContents[index].classList.add('tab__content_active');
            tabsNavigation.children[index].classList.add('tab_active');
        }
    });
});