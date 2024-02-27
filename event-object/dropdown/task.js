let dropdownValue = document.querySelector('.dropdown__value');
let dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', function() {
    let dropdownList = this.nextElementSibling;

    dropdownList.classList.toggle('dropdown__list_active');
})

dropdownItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        dropdownValue.textContent = item.textContent.trim();

        let dropdownList = item.closest('.dropdown__list');

        dropdownList.classList.remove('dropdown__list_active');

        e.preventDefault();
    });
});

