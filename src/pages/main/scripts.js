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

