//Кнопка для возврата наверх

(function scroll() {

  let button = document.querySelector(".button-scroll_js");

  window.addEventListener('scroll', function (event) {
    if (window.pageYOffset >= 1500) {
      button.classList.remove("button-scroll_hidden");
    }
    if (window.pageYOffset < 1500) {
      button.classList.add("button-scroll_hidden");
    }
  });

  button.addEventListener('click', function (event) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

//форма регистрации

(function registr() {
  let regWindow = document.querySelector(".register-modal_js");
  let buttonOpen = document.querySelector(".header__link_regjs");
  let buttonClose = document.querySelector(".registration__button-close_js");
  let input = document.querySelector(".registration__input_js");

  buttonOpen.addEventListener("click", function () {
    regWindow.classList.remove("register-modal_hidden");
    input.focus();
  });

  buttonClose.addEventListener("click", function () {
    regWindow.classList.add("register-modal_hidden");
    buttonOpen.focus();
  });

  window.addEventListener("keydown", function (event) {
    if (!regWindow.classList.contains("register-modal_hidden") && event.code === "Escape") {
      regWindow.classList.add("register-modal_hidden");
      buttonOpen.focus();
    }
  })
})();

//форма для входа

(function sign() {
  let signWindow = document.querySelector(".sign-modal_js");
  let buttonOpen = document.querySelector(".header__link_signjs");
  let buttonClose = document.querySelector(".sign__button-close_js");
  let input = document.querySelector(".sign__input_js");

  buttonOpen.addEventListener("click", function () {
    signWindow.classList.remove("sign-modal_hidden");
    input.focus();
  });

  buttonClose.addEventListener("click", function () {
    signWindow.classList.add("sign-modal_hidden");
    buttonOpen.focus();
  });

  window.addEventListener("keydown", function (event) {
    if (!signWindow.classList.contains("sign-modal_hidden") && event.code === "Escape") {
      signWindow.classList.add("sign-modal_hidden");
      buttonOpen.focus();
    }
  })
})();

//форма для отправки сообщений

(function sendMessage() {
  let messageWindow = document.querySelector(".message-modal_js");
  let buttonOpen = document.querySelector(".button-message_js");
  let buttonClose = document.querySelector(".message__button-close_js");
  let input = document.querySelector(".message__input_js");

  buttonOpen.addEventListener("click", function () {
    messageWindow.classList.remove("message-modal_hidden");
    input.focus();
  });

  buttonClose.addEventListener("click", function () {
    messageWindow.classList.add("message-modal_hidden");
    buttonOpen.focus();
  });

  window.addEventListener("keydown", function (event) {
    if (!messageWindow.classList.contains("message-modal_hidden") && event.code === "Escape") {
      messageWindow.classList.add("message-modal_hidden");
      buttonOpen.focus();
    }
  })
})();

//валидация форм

function getValuesForm(form) {
  let body = {};
  const inputs = form.querySelectorAll("input");
  const textareas = form.querySelectorAll("textarea");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    switch (input.type) {
      case "radio":
        if (input.checked) {
          body[input.name] = input.value;
        }
        break;

      case "checkbox":
        if (!body[input.name]) {
          body[input.name] = [];
        }
        if (input.checked) {
          const inputLenght = body[input.name].length;
          body[input.name][inputLenght] = input.value;
        }
        break;

      case "file":
        body[input.name] = input.files;
        break;

      default:
        body[input.name] = input.value;
        break;
    }
  }
  return body
}

function mailCheck(email) {
  return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

function phoneCheck(phone) {
  return phone.match(/^(\s*)?(\+)?([-_():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
}

function errorMessageCreater(input, text) {
  let message = document.createElement("div");
  message.classList.add("invalid-text");
  message.innerText = text;
  input.insertAdjacentElement("afterend", message);
  input.addEventListener("input", function handlerInput(event) {
    message.remove();
    input.removeEventListener("input", handlerInput);
  })
}

function setInvalidInput(input) {
  input.classList.add("invalid-input");
  input.addEventListener("input", function handlerInput(event) {
    input.classList.remove("invalid-input");
    input.removeEventListener("input", handlerInput);
  })
}

function setFormErrors(form, errors) {
  const inputs = form.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (errors[input.name]) {
      setInvalidInput(input);
      errorMessageCreater(input, errors[input.name]);
    }
  }
}

(function () {
  let formSignIn = document.forms["sign-in"];
  formSignIn.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const values = getValuesForm(form);
    let errors = {}
    if (!mailCheck(values.email)) {
      errors.email = "Please enter a valid email address (your entry is not in the format somebody@example.com)";
    }
    if (values.password.length < 1) {
      errors.password = "This field is required";
    }
    setFormErrors(form, errors);
  })

  let formRegistration = document.forms["register"];
  formRegistration.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const values = getValuesForm(form);
    let errors = {}
    if (!mailCheck(values.email)) {
      errors.email = "Please enter a valid email address (your entry is not in the format somebody@example.com)";
    }
    if (values.name.length < 1) {
      errors.name = "This field is required";
    }
    if (values.surname.length < 1) {
      errors.surname = "This field is required";
    }
    if (values.password.length < 1) {
      errors.password = "This field is required";
    }
    if (values.rpassword.length < 1) {
      errors.rpassword = "This field is required";
    }
    if (values.location.length < 1) {
      errors.location = "This field is required";
    }
    if (values.age.length < 1) {
      errors.age = "This field is required";
    }
    if (!(values.accept.checked)) {
      errors.accept = "Clicking on the button!";
    }
    setFormErrors(form, errors);
  })

  let formSendMessage = document.forms["send-message"];
  formSendMessage.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const values = getValuesForm(form);
    console.log(values);
    let errors = {}
    if (values.name.length < 1) {
      errors.name = "This field is required";
    }
    if (values.subject.length < 1) {
      errors.subject = "This field is required";
    }
    if (!mailCheck(values.email)) {
      errors.email = "Please enter a valid email address (your entry is not in the format somebody@example.com)";
    }
    if (!phoneCheck(values.phone)) {
      errors.phone = "Please enter a valid phone";
    }
    if (!(values.accept.checked)) {
      errors.accept = "Clicking on the button!";
    }
    setFormErrors(form, errors);
  })
})();