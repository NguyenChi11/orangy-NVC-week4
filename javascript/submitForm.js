const formEl = document.querySelector(".form__wrapper");
const fullName = formEl.querySelector("#fullname");
const email = formEl.querySelector("#email");
const phone = formEl.querySelector("#phone");
const address = formEl.querySelector("#address");
const message = document.querySelector("#text-message");

const popupSuccess = document.querySelector(".popup-success");
const popupError = document.querySelector(".popup-error");
const turnOff = document.querySelector(".icon-popup-fetch");

// const recaptcha = document.querySelector(".popup-recaptcha");

const inputs = document.querySelectorAll(".input-form");
// console.log(inputs);
// console.log(fullName);
// console.log(email);
// console.log(phone);
// console.log(address);
// console.log(message);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  // Kiểm tra nếu trường nào bị thiếu dữ liệu
  let isValidInput = true;

  // Kiểm tra từng input
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      isValidInput = false;
      input.focus();
      return;
    }
  });

  if (isValidInput) {
    let body = JSON.stringify({
      fullname: fullName.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      address: address.value.trim(),
      message: message.value.trim(),
    });

    // Gửi dữ liệu qua fetch
    fetch("https://testapi.demo.wgentech.com/notify.php", {
      body,
      method: "POST",
      keepalive: true,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log response từ server
        if (!data.success) {
          console.log(body);
          // Lưu thông tin vào Local Storage
          localStorage.setItem("userData", body);
        }
        // recaptcha.classList.add("action");
        showPopupSuccess();
      })
      .catch((error) => {
        console.error("Error:", error);
        popupError.classList.add("action");
        turnOff.addEventListener("click", () => {
          popupError.classList.remove("action");
        });
      });
    function showPopupSuccess() {
      popupSuccess.classList.add("action");
      turnOff.addEventListener("click", () => {
        popupSuccess.classList.remove("action");
      });
    }
  }
});

window.addEventListener("load", () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData) {
    fullName.value = userData.fullname;
    phone.value = userData.phone;
    email.value = userData.email;
    address.value = userData.address;
    message.value = userData.message;
  }
});
