const phone = document.querySelector(".header__phone");
const address = document.querySelector(".header__address");
const iconArrows = document.querySelectorAll(".icon__arrow");

iconArrows.forEach((iconArrow) => {
  iconArrow.addEventListener("click", () => {
    phone.classList.toggle("turn__off");
    address.classList.toggle("turn__off");
  });
});
