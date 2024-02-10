let cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");

let counter = 0;

cookie.addEventListener('click', () => {
    counter++;
    clickerCounter.textContent = counter;

    if(cookie.width === 200) {
        cookie.width = 250;
        cookie.height = 200;
    } else {
        cookie.width = 200;
        cookie.height = 150;
    }
});