function Validator(options) {
  // hàm thực hiện validate
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    var errorMessage = rule.test(inputElement.value);

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
      inputElement.classList.add("invalid-input");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
      inputElement.classList.remove("invalid-input");
    }
  }

  // lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        // xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        // xử lý trường  hợp mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          var errorElement = inputElement.parentElement.querySelector(
            options.errorSelector
          );
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
          inputElement.classList.remove("invalid-input");
        };
      }
    });
  }
}

Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Please enter this input field";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return regex.test(value) ? undefined : "Please enter email";
    },
  };
};
Validator.isPhone = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var phoneRegex = /^(?:\+?84|0)?[3|5|7|8|9]\d{8}$/;
      return phoneRegex.test(value) ? undefined : "Please enter phone";
    },
  };
};

Validator({
  form: "#form-1",
  errorSelector: ".form-message",
  rules: [
    Validator.isRequired("#fullname"),
    Validator.isEmail("#email"),
    Validator.isPhone("#phone"),
  ],
});
