const submitFooter = document.querySelector("#submit-footer");
const inputFooter = document.querySelector("#input-footer");
const formFooter = document.querySelector(".footer__input");

const popupSuccess = document.querySelector(".popup-success");
const popupError = document.querySelector(".popup-error");
const turnOff = document.querySelector(".icon-popup-fetch");

// Hàm kiểm tra email hợp lệ
function isValidEmail(email) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

formFooter.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = inputFooter.value;
  // Kiểm tra email hợp lệ
  if (!isValidEmail(emailValue)) {
    console.log("check email"); // Hoặc hiển thị thông báo bằng popup tùy bạn
    return;
  }

  // Tạo FormData nếu email hợp lệ
  const formData = new FormData();
  formData.append("email", emailValue);

  fetch(
    "https://script.google.com/macros/s/AKfycbwlnruolAEFek8x1wUYLxocHdIuwHWrHYXSfzSXZSygslzejM-ppDe76EuK8jkKWyB4/exec",
    {
      method: "POST",
      body: formData,
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

// const isValidEmail = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };
// const fetch = async () => {
//   const response = await fetch(googleScriptURL, {
// method: "POST",
// headers: { "Content-Type": "application/x-www-form-urlencoded" },
// body: new URLSearchParams({ email }),
//   });
//   const result = await response.json();
//   console.log(result);
// };
// document.addEventListener("DOMContentLoaded", () => {
//   const emailInput = document.querySelector(
//     ".footer__input input[type='email']"
//   );
//   const popup = document.querySelector(".notification-wrap");
//   const submitButton = document.querySelector(".footer__input button");
//   const googleScriptURL =
//     "https://script.google.com/macros/s/AKfycbwlnruolAEFek8x1wUYLxocHdIuwHWrHYXSfzSXZSygslzejM-ppDe76EuK8jkKWyB4/exec";
//   const showPopup = (message) => {
//     popup.querySelector("h1").innerHTML = message;
//     popup.style.display = "block";
//   };
//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };
//   const sendEmail = async (email) => {
//     try {
//       const response = await fetch(googleScriptURL, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams({ email }),
//       });
//       const result = await response.json();
//       console.log(result);
//       if (result.result === "success") {
//         showPopup("Thank you! <br />Data has been sent successfully.");
//       } else {
//         showPopup(
//           "Oops! An error occurred. <br/>Please check your information and try again."
//         );
//       }
//     } catch (error) {
//       alert("An error occurred. Please try again later.");
//       console.error("Error:", error);
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const email = emailInput.value.trim();
//     if (!isValidEmail(email)) {
//       alert("Invalid email format. Please check and try again.");
//       return;
//     }
//     sendEmail(email);
//     emailInput.value = "";
//   };
//   submitButton.addEventListener("click", handleSubmit);
//   emailInput.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") handleSubmit(e);
//   });
// });
