const revealElements = document.querySelectorAll('.reveal');

function isinViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showElementsOnScroll() {
    revealElements.forEach(element => {
        if(isinViewport(element)) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
}

window.addEventListener('scroll', showElementsOnScroll);

showElementsOnScroll();