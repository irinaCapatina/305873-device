var slideOne = document.querySelector(".slide-01");
var slideTwo = document.querySelector(".slide-02");
var slideThree = document.querySelector(".slide-03");

var slideButtonOne = document.querySelector(".slider-btn-01");
var slideButtonTwo = document.querySelector(".slider-btn-02");
var slideButtonThree = document.querySelector(".slider-btn-03");

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
