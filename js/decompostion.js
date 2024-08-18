// модуль создания навигации
function createNavigation() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const buttons = [
    { label: "ОПИСАНИЕ", tab: "description" },
    { label: "ОТЗЫВЫ", tab: "reviews" },
    { label: "ОТКУДА?", tab: "source" },
  ];

  buttons.forEach((button) => {
    const btn = document.createElement("button");
    btn.classList.add("nav__button");
    btn.textContent = button.label;
    btn.dataset.tab = button.tab;
    btn.addEventListener("click", () => showTab(button.tab));
    nav.appendChild(btn);
  });

  return nav;
}

// модуль карточки характеристик товара
function createSpecificationCard(title, specs) {
  const group = document.createElement("article");
  group.classList.add("specifications__group");

  const h2 = document.createElement("h2");
  h2.classList.add("specifications__title");
  h2.textContent = title;
  group.appendChild(h2);

  specs.forEach((spec) => {
    const item = document.createElement("article");
    item.classList.add("specifications__item");

    const key = document.createElement("span");
    key.classList.add("specifications__text");
    key.textContent = spec.label;

    const value = document.createElement("span");
    value.classList.add("specifications__text");
    value.textContent = spec.value;

    item.appendChild(key);
    item.appendChild(value);
    group.appendChild(item);
  });

  return group;
}
// создание табов
function showTab(tab) {
  document.getElementById("description").style.display = "none";
  document.getElementById("reviews").style.display = "none";
  document.getElementById("source").style.display = "none";

  if (tab === "description") {
    document.getElementById("description").style.display = "block";
  } else if (tab === "reviews") {
    document.getElementById("reviews").style.display = "block";
  } else if (tab === "source") {
    document.getElementById("source").style.display = "block";
  }
}

//модуль создания контента переиспользуемый
document.getElementById("nav").appendChild(createNavigation());
const descriptionContainer = document.getElementById("description");
const descriptionText = `
        <section class="description">
            <p class="description__text">Томаты на ветке красные (помидоры) — более плотные, яркие и ароматные по сравнению с обычными...</p>
        </section>
    `;
descriptionContainer.innerHTML = descriptionText;

const specifications = [
  { label: "Страна", value: "Россия" },
  { label: "Поставщик", value: "Фермеры: Наталья и Юрий Лейшан" },
  { label: "Тип упаковки", value: "Крафтовый пакет" },
  { label: "Сертификаты качества", value: "В наличии" },
];
const nutrition = [
  { label: "Энергетическая ценность", value: "18 кКал" },
  { label: "Белки", value: "0.9 г" },
  { label: "Жиры", value: "0.2 г" },
  { label: "Углеводы", value: "3.9 г" },
];
const storage = [
  { label: "Срок хранения", value: "7 дней" },
  { label: "Температура хранения", value: "от 3 ° до 7 °" },
];

descriptionContainer.appendChild(
  createSpecificationCard("ХАРАКТЕРИСТИКИ", specifications)
);
descriptionContainer.appendChild(
  createSpecificationCard("ПИЩЕВАЯ ЦЕННОСТЬ НА 100Г", nutrition)
);
descriptionContainer.appendChild(
  createSpecificationCard("УСЛОВИЯ ХРАНЕНИЯ", storage)
);

const reviewsContainer = document.getElementById("reviews-container");
reviewsContainer.innerHTML = `
        <section class="reviews">
            <p class="reviews__description">Помогите нам стать ещё лучше. Оставляя отзывы, вы таким образом указываете нам на зоны роста...</p>
            <button class="reviews__button">Оставить отзыв</button>
        </section>
    `;

const sourceContainer = document.getElementById("source-container");
sourceContainer.innerHTML = `<section>Здесь информация об источниках...</section>`;
