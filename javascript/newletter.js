const submitFooter = document.querySelector("#submit-footer");
const inputFooter = document.querySelector("#input-footer");
const formFooter = document.querySelector(".footer__input");

const popupSuccess = document.querySelector(".popup-success");
const popupError = document.querySelector(".popup-error");
const turnOff = document.querySelector(".icon-popup-fetch");

// Hàm kiểm tra email hợp lệ
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

formFooter.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = inputFooter.value.trim();

  // Kiểm tra email hợp lệ
  if (!isValidEmail(emailValue)) {
    alert("Vui lòng nhập email hợp lệ!"); // Hoặc hiển thị thông báo bằng popup tùy bạn
    return;
  }

  // Tạo FormData nếu email hợp lệ
  let formData = new FormData();
  formData.append("emailFooter", emailValue);

  fetch(
    "https://script.google.com/macros/s/AKfycbwlnruolAEFek8x1wUYLxocHdIuwHWrHYXSfzSXZSygslzejM-ppDe76EuK8jkKWyB4/exec",
    {
      body: formData,
      method: "POST",
      keepalive: true,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      popupSuccess.classList.add("action");
      turnOff.addEventListener("click", () => {
        popupSuccess.classList.remove("action");
      });
    })
    .catch((error) => {
      console.error("Error:", error);
      popupError.classList.add("action");
      turnOff.addEventListener("click", () => {
        popupError.classList.remove("action");
      });
    });
});
