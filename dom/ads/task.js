const rotators = document.querySelectorAll(".rotator");

rotators.forEach((rotator) => {
  const cases = rotator.querySelectorAll(".rotator__case");
  let currentIndex = 0;
  setInterval(() => {
    cases[currentIndex].classList.remove("rotator__case_active");
    currentIndex++;
    if (currentIndex >= cases.length) {
      currentIndex = 0;
    }
    const color = cases[currentIndex].getAttribute("data-color");
    cases[currentIndex].style.color = color;
    cases[currentIndex].classList.add("rotator__case_active");
  }, parseInt(cases[currentIndex].getAttribute("data-speed")));
});
