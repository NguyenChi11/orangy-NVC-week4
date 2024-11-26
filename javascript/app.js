// selected
const categories = document.querySelectorAll(".product__menu__title");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    categories.forEach((cat) => cat.classList.remove("selected"));
    category.classList.add("selected");
  });
});
