const popup = document.getElementById("popup");
const icon = document.querySelector(".icon-popup");
const popupWrapper = document.querySelector(".popup-wrapper");
const cookieBar = document.querySelector(".popup-cookie-bar");
const btnAccept = document.querySelector(".btn-accept");
const btnIgnore = document.querySelector(".btn-ignore");

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

// cookie bar

document.addEventListener("DOMContentLoaded", () => {
  // Chỉ hiển thị popup nếu cookie "popupDismissed" chưa được thiết lập
  if (!getCookie("cookieBarDismissed")) {
    setTimeout(() => {
      cookieBar.classList.add("active");
    }, 3000);
  }
  btnAccept.addEventListener("click", () => {
    setCookie("cookieBarDismissed", "true", 24 * 6 * 30);
    cookieBar.classList.remove("active");
  });

  btnIgnore.addEventListener("click", () => {
    setCookie("cookieBarDismissed", "true", 0.1);
    cookieBar.classList.remove("active");
  });
});
