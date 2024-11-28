const popup = document.getElementById("popup");
const icon = document.querySelector(".icon-popup");
const popupWrapper = document.querySelector(".popup-wrapper");

// thiết lập cookie
function setCookie(name, value, times) {
  const date = new Date();
  date.setTime(date.getTime() + times * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// đọc cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  // Chỉ hiển thị popup nếu cookie "popupDismissed" chưa được thiết lập
  if (!getCookie("popupDismissed")) {
    setTimeout(() => {
      popup.classList.add("active");
    }, 3000);
  }
  icon.addEventListener("click", () => {
    setCookie("popupDismissed", "true", 4);
    popup.classList.remove("active");
  });
  popup.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) {
      setCookie("popupDismissed", "true", 4);
      popup.classList.remove("active");
    }
  });
});

document.addEventListener("touchstart", () => {
  if (!getCookie("popupDismissed")) {
    setTimeout(() => {
      popup.classList.add("active");
    }, 0);
  }
});
