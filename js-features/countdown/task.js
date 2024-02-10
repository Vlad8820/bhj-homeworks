let elementTimer = document.getElementById("timer");

function updateTimer() {
    let currentTime = parseInt(elementTimer.textContent, 10);
    if(currentTime > 0) {
        elementTimer.textContent = currentTime - 1;
    }
    else {
        clearInterval(timerInterval);
        window.alert("Таймер достиг нуля");
    }
}

let timerInterval = setInterval(updateTimer, 1000);