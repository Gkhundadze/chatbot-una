"use strict";

// const burgerBtn = document.querySelector(".burger__menu__btn");
const mainNavigation = document.querySelector(".navigation");
const chatStartBtnAbsolute = document.querySelector(".start__chat--btn");
const closeIon = document.querySelector(".close__btn");
const chatStartImg = document.querySelector(".start__chat__img");
const chatOpenBtns = document.querySelectorAll(".chat--open");
const aboutSpan = document.querySelector(".about__span");
const aboutIcon = document.querySelector(".icon__span");
const moreBtn = document.querySelector(".more__btn");
const welcomeMorePara = document.querySelector(".more__para");
const aboutMorePara = document.querySelector(".more__about__para");
const aboutMoreBtn = document.querySelector(".more__btn--about");

chatOpenBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (closeIon.classList.contains("hidden")) {
      chatStartImg.classList.add("hidden");
      closeIon.classList.remove("hidden");
    } else {
      chatStartImg.classList.remove("hidden");
      closeIon.classList.add("hidden");
    }
  });
});

mainNavigation.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("navigation__anchor") &&
    window.innerWidth <= 430
  ) {
    mainNavigation.style.display = "none";
  }
});

moreBtn.addEventListener("click", () => {
  welcomeMorePara.style.display = "block";
  moreBtn.style.display = "none";
});

aboutMoreBtn.addEventListener("click", () => {
  aboutMorePara.style.display = "block";
  aboutMoreBtn.style.display = "none";
});
