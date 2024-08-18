const buttons = document.querySelectorAll(".nav__button");
let activeTab = document.querySelector("#description");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("nav__button--active"));

    this.classList.add("nav__button--active");

    const tabId = `#${this.getAttribute("data-tab")}`;

    activeTab.style.display = "none";

    const newTab = document.querySelector(tabId);
    newTab.style.display = "block";

    activeTab = newTab;
  });
});

activeTab.style.display = "block";

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: false,
  slidesPerView: "auto",
  breakpoints: {
    376: {
      slidesPerView: "auto",
      freeMode: true,
    },
  },
});
