const questions = document.querySelectorAll(".faq__items");

questions.forEach((question) => {
  const title = question.querySelector(".faq__questions");
  const answer = question.querySelector(".faq__answer");
  const iconPlus = question.querySelector(".icon-plus");
  const iconMins = question.querySelector(".icon-mins");
  title.addEventListener("click", () => {
    // kiểm tra trạng thái
    const isActive = answer.classList.contains("show");
    questions.forEach((item) => {
      item.querySelector(".icon-plus").classList.remove("hide");
      item.querySelector(".icon-mins").classList.add("hide");
      item.querySelector(".faq__answer").classList.remove("show");
    });
    if (!isActive) {
      answer.classList.add("show");
      iconPlus.classList.add("hide");
      iconMins.classList.remove("hide");
    }
  });
});
