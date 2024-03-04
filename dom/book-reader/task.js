document.addEventListener("DOMContentLoaded", function () {
  const fontControls = document.querySelectorAll(".font-size");

  fontControls.forEach((control) => {
    control.addEventListener("click", function (event) {
      event.preventDefault();

      fontControls.forEach((control) => {
        control.classList.remove("font-size_active");
      });

      control.classList.add("font-size_active");

      const fontSize = control.getAttribute("data-size");
      const book = document.getElementById("book");
      book.classList.remove("book_fs-small", "book_fs-big");
      book.classList.add(`book_fs-${fontSize}`);
    });
  });
});
