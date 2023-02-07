"use strict";
const mainNavigation = document.querySelector(".navigation"),
  chatStartBtnAbsolute = document.querySelector(".start__chat--btn"),
  closeIon = document.querySelector(".close__btn"),
  chatStartImg = document.querySelector(".start__chat__img"),
  chatOpenBtns = document.querySelectorAll(".chat--open"),
  aboutSpan = document.querySelector(".about__span"),
  aboutIcon = document.querySelector(".icon__span"),
  moreBtn = document.querySelector(".more__btn"),
  welcomeMorePara = document.querySelector(".more__para"),
  aboutMorePara = document.querySelector(".more__about__para"),
  aboutMoreBtn = document.querySelector(".more__btn--about");
chatOpenBtns.forEach((t) => {
  t.addEventListener("click", () => {
    closeIon.classList.contains("hidden")
      ? (chatStartImg.classList.add("hidden"),
        closeIon.classList.remove("hidden"))
      : (chatStartImg.classList.remove("hidden"),
        closeIon.classList.add("hidden"));
  });
}),
  mainNavigation.addEventListener("click", (t) => {
    t.target.classList.contains("navigation__anchor") &&
      window.innerWidth <= 430 &&
      (mainNavigation.style.display = "none");
  }),
  moreBtn.addEventListener("click", () => {
    (welcomeMorePara.style.display = "block"), (moreBtn.style.display = "none");
  }),
  aboutMoreBtn.addEventListener("click", () => {
    (aboutMorePara.style.display = "block"),
      (aboutMoreBtn.style.display = "none");
  }),
  document.querySelectorAll(".chatbot__btns").forEach((t) => {
    t.addEventListener("click", (t) => {
      let e = document.querySelector(".chatbot__btn__states");
      e.classList.contains("chatbot__open__btn")
        ? (e.classList.remove("chatbot__open__btn"),
          e.classList.add("chatbot__close__btn"),
          document
            .getElementById("chatbotIframe")
            .setAttribute("style", "display: block;"))
        : (e.classList.remove("chatbot__close__btn"),
          e.classList.add("chatbot__open__btn"),
          document
            .getElementById("chatbotIframe")
            .setAttribute("style", "display: none"));
    });
  });
