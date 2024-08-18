class TabNavigation {
  constructor(navElement) {
    this.navElement = navElement;
    this.tabs = Array.from(this.navElement.querySelectorAll(".nav__button"));
    this.init();
  }

  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", () => this.switchTab(tab));
    });
  }

  switchTab(tab) {
    const targetId = tab.getAttribute("data-tab");
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      section.style.display = section.id === targetId ? "block" : "none";
    });
  }
}

class Description {
  constructor(descriptionElement) {
    this.descriptionElement = descriptionElement;
    this.init();
  }

  init() {}
}

class Specifications {
  constructor(specificationsElement) {
    this.specificationsElement = specificationsElement;
    this.init();
  }

  init() {}
}

class Reviews {
  constructor(reviewsElement) {
    this.reviewsElement = reviewsElement;
    this.init();
  }

  init() {
    const button = this.reviewsElement.querySelector(".reviews__button");
    button.addEventListener("click", () => this.leaveReview());
  }

  leaveReview() {
    // Logic to leave a review
    alert("Thank you for your review!");
  }
}

class Source {
  constructor(sourceElement) {
    this.sourceElement = sourceElement;
    this.init();
  }

  init() {}
}

class Products {
  constructor(productsElement) {
    this.productsElement = productsElement;
    this.init();
  }

  init() {}
}

document.addEventListener("DOMContentLoaded", () => {
  const navElement = document.querySelector(".nav");
  const descriptionElement = document.querySelector(".description");
  const specificationsElement = document.querySelector(".specifications");
  const reviewsElement = document.querySelector(".reviews");
  const sourceElement = document.querySelector(".source");
  const productsElement = document.querySelector(".products");

  if (navElement) new TabNavigation(navElement);
  if (descriptionElement) new Description(descriptionElement);
  if (specificationsElement) new Specifications(specificationsElement);
  if (reviewsElement) new Reviews(reviewsElement);
  if (sourceElement) new Source(sourceElement);
  if (productsElement) new Products(productsElement);
});
