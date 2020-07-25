
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
  for (let textarea of textareas) {
    body[textarea.name] = textarea.value;
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
    if (!(values.accept == "yes")) {
      errors.accept = "Click on the button!";
    }
    setFormErrors(form, errors);
  })

  let formSendMessage = document.forms["send-message"];
  formSendMessage.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const values = getValuesForm(form);
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

//фильтр

function setValuesForm(form, values) {
  const inputs = form.querySelectorAll("input");
  const textareas = form.querySelectorAll("textarea");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    switch (input.type) {
      case "radio":
        if (values[input.name] && values[input.name] === input.value) {
          input.checked = true;
        }
        break;

      case "checkbox":
        if (values[input.name]) {
          for (let j = 0; j < values[input.name].length; j++) {
            if (values[input.name][j] === input.value) {
              input.checked = true;
            }
          }
        }
        break;

      default:
        input.value = values[input.name];
        break;
    }
  }
  for (let textarea of textareas) {
    textarea.value = values[textarea.name].replace("undefined", " ");
  }
}

function getValuesURL() {
  let parametrs = {};
  if (location.search) {
    let pArray = location.search.substring(1).split("&");
    for (let i = 0; i < pArray.length; i++) {
      let pNameValues = pArray[i].split("=");
      let name = pNameValues[0];
      let value = pNameValues[1];
      if (parametrs[name]) {
        if (typeof parametrs[name] === "string") {
          parametrs[name] = [parametrs[name], value];
        } else {
          parametrs[name].push(value);
        }
      } else {
        parametrs[name] = value;
      }
    }
  }
  return parametrs;
}

function setValuesURL(values) {
  let parametrs = [];
  let names = Object.keys(values);
  for (let i = 0; i < names.length; i++) {
    if ((typeof values[names[i]]) === "string") {
      parametrs.push(names[i] + "=" + values[names[i]]);
    } else {
      for (let j = 0; j < values[names[i]].length; j++) {
        parametrs.push(names[i] + "=" + values[names[i]][j]);
      }
    }
  }
  window.history.replaceState({}, document.title, "?" + parametrs.join("&"));
}

let formFilter = document.forms["filter"];

setValuesForm(filter, getValuesURL());

formFilter.addEventListener("submit", function (event) {
  event.preventDefault();
  setValuesURL(getValuesForm(event.target));
})

let pages = document.querySelectorAll(".page_js");
for (let i = 0; i < pages.length; i++) {
  pages[i].addEventListener("click", function (event) {
    event.preventDefault();
    let value = getValuesForm(filter);
    value.page = i + 1 + '';
    setValuesURL(value);
    allValues = value;
    // pages.classList.remove("pagination__page_active");
    pages[i].classList.add("pagination__page_active");
    getCards(allValues);
  })
}


//сервер

const server = "http://academy.directlinedev.com";
let tags = document.querySelector(".tags_js");
let cards = document.querySelector(".cards_js");
let allValues = getValuesURL();

function call(method, path, fn) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, server + path);
  xhr.send();
  xhr.onload = function () {
    fn(xhr);
  }
}

function createTag(tag) {
  return `
    <label class="filter__tag-label">
              <input class="filter__checkbox hidden" type="checkbox" name="tag" value="green">
              <span style="color: ${tag.color}" class="filter__indicator"></span>
    </label>
    `
}

function createCard(card) {
  return `
  <div class="card">
  <img src="${server}${card.desktopPhotoUrl}" alt="${card.title}" class="card__img">
  <div class="card__info">
    <div class="card__tags">
      <span class="card__tag card__tag_orange"></span>
      <span class="card__tag"></span>
    </div>
    <div class="card__filter">
      <span class="card__date card__text">${card.date}</span>
      <span class="card__views card__text">${card.views} views</span>
      <span class="card__comments card__text">${card.commentsCount} comments</span>
    </div>
    <h2 class="card__title">${card.title}</h2>
    <p class="card__paper">${card.text}</p>
    <a href="#" class="card__link">Go to this post</a>
  </div>
</div>
    `
}

function getCards(allValues) {
  let page = allValues.page ? +allValues.page : 1;
  let offset = (page - 1) * 5;
  call("GET", `/api/posts?limit=${5}&offset=${offset}`, function (result) {
    let response = JSON.parse(result.response);
    if (response.success) {
      console.log(JSON.parse(result.response))
      for (let i = 0; i < response.data.length; i++) {
        let card = createCard(response.data[i]);
        cards.insertAdjacentHTML("beforeend", card);
      }
    } else {
      alert("Ошибка сервера");
    }
  })
}

call("GET", "/api/tags", function (result) {
  let response = JSON.parse(result.response);
  if (response.success) {
    console.log(JSON.parse(result.response))
    for (let i = 0; i < response.data.length; i++) {
      let tag = createTag(response.data[i]);
      tags.insertAdjacentHTML("beforeend", tag);
    }
  } else {
    alert("Ошибка сервера");
  }
})