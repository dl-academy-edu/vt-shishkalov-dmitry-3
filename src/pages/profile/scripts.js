
//форма регистрации

(function changePassword() {
  let passwordWindow = document.querySelector(".password-modal_js");
  let buttonOpen = document.querySelector(".change-password_js");
  let buttonClose = document.querySelector(".password-form__button-close_js");
  let input = document.querySelector(".password-form__input_js");

  buttonOpen.addEventListener("click", function () {
    passwordWindow.classList.remove("password-modal_hidden");
    input.focus();
  });

  buttonClose.addEventListener("click", function () {
    passwordWindow.classList.add("password-modal_hidden");
    buttonOpen.focus();
  });

  window.addEventListener("keydown", function (event) {
    if (!passwordWindow.classList.contains("password-modal_hidden") && event.code === "Escape") {
      passwordWindow.classList.add("password-modal_hidden");
      buttonOpen.focus();
    }
  })
})();

//форма для входа

(function d() {
  let dWindow = document.querySelector(".data-modal_js");
  let buttonOpen = document.querySelector(".data-button_js");
  let buttonClose = document.querySelector(".data__button-close_js");
  let input = document.querySelector(".data__input_js");

  buttonOpen.addEventListener("click", function () {
    dWindow.classList.remove("data-modal_hidden");
    input.focus();
  });

  buttonClose.addEventListener("click", function () {
    dWindow.classList.add("data-modal_hidden");
    buttonOpen.focus();
  });

  window.addEventListener("keydown", function (event) {
    if (!dWindow.classList.contains("data-modal_hidden") && event.code === "Escape") {
      dWindow.classList.add("data-modal_hidden");
      buttonOpen.focus();
    }
  })
})();
