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
    return !errorMessage;
  }

  // lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  // lấy ra thẻ input
  var inputList = formElement.querySelectorAll(".input-form");
  // console.log(formElement);
  // console.log(inputList);
  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();

      var isFormValid = true;
      // lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });
      if (isFormValid) {
        if (typeof options.onSubmit === "function") {
          //   var enableInputs = formElement.querySelectorAll('.input-form');
          //   console.log(enableInputs);
        }
      }
    };
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

Validator.isAddress = function (selector) {
  return {
    selector: selector,
    test: function () {},
  };
};

Validator({
  form: "#form-1",
  errorSelector: ".form-message",
  rules: [
    Validator.isRequired("#fullname"),
    Validator.isEmail("#email"),
    Validator.isPhone("#phone"),
    Validator.isAddress("#address"),
  ],
  onSubmit: function (data) {
    console.log(data);
  },
});
