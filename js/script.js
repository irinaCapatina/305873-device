var slideOne = document.querySelector(".slide-01");
var slideTwo = document.querySelector(".slide-02");
var slideThree = document.querySelector(".slide-03");

var slideButtonOne = document.querySelector(".slider-btn-01");
var slideButtonTwo = document.querySelector(".slider-btn-02");
var slideButtonThree = document.querySelector(".slider-btn-03");

var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("write-us-form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList("modal-show");

  if (storage) {
    username.value = storage;
    email.focus();
  } else {}
  username.focus();
}
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if(!username.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("username", username.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });


slideButtonOne.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideOne.classList.remove("slide-hide");
    slideTwo.classList.add("slide-hide");
    slideThree.classList.add("slide-hide");
    slideButtonOne.classList.add("slider-btn-active");
    slideButtonTwo.classList.remove("slider-btn-active");
    slideButtonThree.classList.remove("slider-btn-active");
});

slideButtonTwo.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideOne.classList.add("slide-hide");
    slideTwo.classList.remove("slide-hide");
    slideThree.classList.add("slide-hide");
    slideButtonOne.classList.remove("slider-btn-active");
    slideButtonTwo.classList.add("slider-btn-active");
    slideButtonThree.classList.remove("slider-btn-active");
});

slideButtonThree.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideOne.classList.add("slide-hide");
    slideTwo.classList.add("slide-hide");
    slideThree.classList.remove("slide-hide");
    slideButtonOne.classList.remove("slider-btn-active");
    slideButtonTwo.classList.remove("slider-btn-active");
    slideButtonThree.classList.add("slider-btn-active");
});
