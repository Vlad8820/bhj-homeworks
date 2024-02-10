(() => {
    let playing = true,
        activeHole = 1,
        deadCounter = 0,
        lostCounter = 0;

    const stop = () => {
            playing = false;
            deadCounter = 0;
            lostCounter = 0;
            document.getElementById('dead').textContent = deadCounter;
            document.getElementById('lost').textContent = lostCounter;
        },
        getHole = index => document.getElementById(`hole${index}`),
        deactivateHole = index => getHole(index).classList.remove('hole_has-mole'),
        activateHole = index => {
            deactivateHole(activeHole);
            activeHole = index;
            getHole(index).classList.add('hole_has-mole');
        },
        moleKilled = (event) => {
            const hole = event.target;
            if (hole.classList.contains('hole_has-mole')) {
                deadCounter++;
                document.getElementById('dead').textContent = deadCounter;
                if (deadCounter === 10) {
                    alert('Поздравляем! Вы победили!');
                    stop();
                }
            } else {
                lostCounter++;
                document.getElementById('lost').textContent = lostCounter;
                if (lostCounter === 5) {
                    alert('Вы проиграли. Попробуйте еще раз!');
                    stop();
                }
            }
        };

    const holes = document.querySelectorAll('.hole');
    holes.forEach(hole => hole.addEventListener('click', moleKilled));

    activateHole(activeHole);
})();
