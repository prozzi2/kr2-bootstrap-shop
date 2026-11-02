const PRODUCTS = [
  {
    "id": 1,
    "name": "Рука «Титан» — правая мужская",
    "short": "Крепкая мужская рука для армрестлинга. Позволяет играючи бороть всех студентов вашего потока.",
    "desc": "Флагман магазина. «Титан» создан для тех, кто выходит к столу за победой: усиленное предплечье, мёртвый хват и запас прочности на целый турнирный сезон. Подходит для борьбы правой рукой в любой весовой категории.",
    "price": 32000,
    "old": null,
    "img": "pravaya_ruka.png",
    "category": "sport",
    "gender": "m",
    "side": "right",
    "badge": [
      "Хит",
      "text-bg-danger"
    ],
    "stock": true,
    "specs": {
      "Сила хвата": "120 кг",
      "Вес": "4,8 кг",
      "Техника": "верх, крюк, трицепс",
      "Гарантия": "2 турнирных сезона"
    }
  },
  {
    "id": 2,
    "name": "Рука «Титан» — левая мужская",
    "short": "Крепкая мужская рука для армрестлинга. Позволяет играючи бороть всех студентов вашего потока.",
    "desc": "Левая версия флагмана для тех, кто борется на обе руки. Тот же мёртвый хват и усиленное предплечье, зеркальная посадка и отдельная настройка под левостороннюю борьбу.",
    "price": 31000,
    "old": null,
    "img": "levaya_ruka.png",
    "category": "sport",
    "gender": "m",
    "side": "left",
    "badge": [
      "Новинка",
      "text-bg-success"
    ],
    "stock": true,
    "specs": {
      "Сила хвата": "115 кг",
      "Вес": "4,7 кг",
      "Техника": "верх, крюк",
      "Гарантия": "2 турнирных сезона"
    }
  },
  {
    "id": 3,
    "name": "Рука «Валькирия» — правая женская",
    "short": "Крепкая женская рука для армрестлинга. Позволяет играючи бороть всех студентов вашего потока.",
    "desc": "Лёгкая и быстрая рука для женского армрестлинга. Резкий старт, цепкая кисть и отличный контроль в борьбе верхом — выбор тех, кто побеждает техникой, а не только силой.",
    "price": 21000,
    "old": null,
    "img": "prav_zhenskaya_ruka.png",
    "category": "sport",
    "gender": "f",
    "side": "right",
    "badge": [
      "Выбор чемпионок",
      "text-bg-warning"
    ],
    "stock": true,
    "specs": {
      "Сила хвата": "85 кг",
      "Вес": "3,6 кг",
      "Техника": "верх, боковое давление",
      "Гарантия": "2 турнирных сезона"
    }
  },
  {
    "id": 4,
    "name": "Рука «Валькирия» — левая женская",
    "short": "Крепкая женская рука для армрестлинга. Позволяет играючи бороть всех студентов вашего потока.",
    "desc": "Левая «Валькирия» для борьбы на обе руки. Та же быстрая кисть и контроль, а сейчас ещё и по сниженной цене.",
    "price": 20500,
    "old": 24000,
    "img": "lev_zhenskaya_ruka.png",
    "category": "sport",
    "gender": "f",
    "side": "left",
    "badge": [
      "Скидка −15%",
      "text-bg-danger"
    ],
    "stock": true,
    "specs": {
      "Сила хвата": "80 кг",
      "Вес": "3,5 кг",
      "Техника": "верх, боковое давление",
      "Гарантия": "2 турнирных сезона"
    }
  },
  {
    "id": 5,
    "name": "Рука «Будни» — правая мужская",
    "short": "Обычная мужская рука для бытовых задач. Не предназначена для армрестлинга!",
    "desc": "Надёжная рука на каждый день: открыть банку, донести пакеты, пожать руку преподавателю после защиты. Для армрестлинга не предназначена — честно предупреждаем.",
    "price": 10000,
    "old": null,
    "img": "prav_ruka_kontur.png",
    "category": "daily",
    "gender": "m",
    "side": "right",
    "badge": null,
    "stock": true,
    "specs": {
      "Сила хвата": "40 кг",
      "Вес": "3,9 кг",
      "Техника": "не предусмотрена",
      "Гарантия": "1 год бытовых задач"
    }
  },
  {
    "id": 6,
    "name": "Рука «Будни» — левая мужская",
    "short": "Обычная мужская рука для бытовых задач. Не предназначена для армрестлинга!",
    "desc": "Левая рука для повседневных дел. Комплектуется с правой «Будни» для полного набора бытовых возможностей. Сейчас доступна под заказ.",
    "price": 10000,
    "old": null,
    "img": "lev_ruka_kontur.png",
    "category": "daily",
    "gender": "m",
    "side": "left",
    "badge": [
      "Под заказ",
      "text-bg-secondary"
    ],
    "stock": false,
    "specs": {
      "Сила хвата": "38 кг",
      "Вес": "3,9 кг",
      "Техника": "не предусмотрена",
      "Гарантия": "1 год бытовых задач"
    }
  },
  {
    "id": 7,
    "name": "Рука «Грация» — правая женская",
    "short": "Обычная женская рука для бытовых задач. Не предназначена для армрестлинга!",
    "desc": "Изящная рука для повседневной жизни: письмо, маникюр, жесты во время спора о сетке Bootstrap. Для армрестлинга не предназначена.",
    "price": 9000,
    "old": null,
    "img": "prav_tonkaya_zhenskaya_ruka.png",
    "category": "daily",
    "gender": "f",
    "side": "right",
    "badge": null,
    "stock": true,
    "specs": {
      "Сила хвата": "30 кг",
      "Вес": "2,9 кг",
      "Техника": "не предусмотрена",
      "Гарантия": "1 год бытовых задач"
    }
  },
  {
    "id": 8,
    "name": "Рука «Грация» — левая женская",
    "short": "Обычная женская рука для бытовых задач. Не предназначена для армрестлинга!",
    "desc": "Левая «Грация» в пару к правой. Лёгкая, аккуратная и сейчас со скидкой.",
    "price": 8100,
    "old": 9000,
    "img": "lev_tonkaya_zhenskaya_ruka.png",
    "category": "daily",
    "gender": "f",
    "side": "left",
    "badge": [
      "Скидка −10%",
      "text-bg-danger"
    ],
    "stock": true,
    "specs": {
      "Сила хвата": "28 кг",
      "Вес": "2,8 кг",
      "Техника": "не предусмотрена",
      "Гарантия": "1 год бытовых задач"
    }
  }
];

const PAGE_SIZE = 6;
const FREE_DELIVERY_FROM = 30000;
const CATEGORY = { sport: "Для армрестлинга", daily: "Для быта" };
const GENDER = { m: "Мужская", f: "Женская" };
const SIDE = { right: "Правая", left: "Левая" };

const params = new URLSearchParams(window.location.search);
const formatPrice = (value) => new Intl.NumberFormat("ru-RU").format(value) + " ₽";
const findProduct = (id) => PRODUCTS.find((product) => product.id === Number(id));
const fieldValue = (form, name) => form.elements.namedItem(name).value.trim();

function showToast(message) {
  const toastElement = document.getElementById("appToast");
  if (!toastElement) return;
  document.getElementById("appToastBody").textContent = message;
  bootstrap.Toast.getOrCreateInstance(toastElement, { delay: 5000 }).show();
}

function validateForm(form) {
  form.classList.add("was-validated");
  if (form.checkValidity()) return true;
  const firstInvalid = form.querySelector(":invalid");
  if (firstInvalid) firstInvalid.focus();
  return false;
}

function clearForm(form) {
  form.reset();
  form.classList.remove("was-validated");
}

function initPhoneInputs() {
  document.querySelectorAll('input[type="tel"]').forEach((input) => {
    input.addEventListener("input", () => {
      let digits = input.value.replace(/\D/g, "");
      if (digits.length > 10 && /^[78]/.test(digits)) digits = digits.slice(1);
      input.value = digits.slice(0, 10);
    });
  });
}

function initQuickOrder() {
  const modalElement = document.getElementById("orderModal");
  const form = document.getElementById("quickOrderForm");
  if (!modalElement || !form) return;
  const select = form.querySelector("#quick-product");

  modalElement.addEventListener("show.bs.modal", (event) => {
    const productId = event.relatedTarget && event.relatedTarget.dataset.product;
    if (productId) select.value = productId;
  });

  modalElement.addEventListener("hidden.bs.modal", () => {
    form.classList.remove("was-validated");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm(form)) return;
    const product = findProduct(select.value);
    const phone = fieldValue(form, "phone");
    bootstrap.Modal.getOrCreateInstance(modalElement).hide();
    showToast(`Заявка на ${product.name} принята. Перезвоним на +7 ${phone}.`);
    clearForm(form);
  });
}

function initCatalog() {
  const grid = document.getElementById("catalogGrid");
  const form = document.getElementById("filterForm");
  if (!grid || !form) return;

  const cards = Array.from(grid.querySelectorAll(".product-col"));
  const sortSelect = document.getElementById("sortSelect");
  const resultCount = document.getElementById("resultCount");
  const emptyAlert = document.getElementById("emptyAlert");
  const pagination = document.getElementById("catalogPagination");
  const priceInput = document.getElementById("filter-price");
  const priceOutput = document.getElementById("priceOutput");
  let currentPage = 1;

  const presetCategory = params.get("category");
  if (CATEGORY[presetCategory]) {
    form.querySelectorAll('input[name="category"]').forEach((checkbox) => {
      checkbox.checked = checkbox.value === presetCategory;
    });
  }

  function getFilteredCards() {
    const data = new FormData(form);
    const query = String(data.get("search") || "").trim().toLowerCase();
    const categories = data.getAll("category");
    const side = data.get("side");
    const gender = data.get("gender");
    const maxPrice = Number(data.get("price"));
    const onlyInStock = data.has("stock");

    return cards.filter(({ dataset }) =>
      (!query || dataset.name.toLowerCase().includes(query)) &&
      categories.includes(dataset.category) &&
      (side === "all" || dataset.side === side) &&
      (gender === "all" || dataset.gender === gender) &&
      Number(dataset.price) <= maxPrice &&
      (!onlyInStock || dataset.stock === "yes")
    );
  }

  function sortCards(list) {
    const sorters = {
      "price-asc": (a, b) => a.dataset.price - b.dataset.price,
      "price-desc": (a, b) => b.dataset.price - a.dataset.price,
      name: (a, b) => a.dataset.name.localeCompare(b.dataset.name, "ru"),
      default: (a, b) => a.dataset.id - b.dataset.id,
    };
    return [...list].sort(sorters[sortSelect.value] || sorters.default);
  }

  function renderPagination(total) {
    const pages = Math.ceil(total / PAGE_SIZE);
    pagination.replaceChildren();
    if (pages <= 1) return;

    const addItem = (label, target, { disabled = false, active = false, ariaLabel } = {}) => {
      const item = document.createElement("li");
      item.className = `page-item${disabled ? " disabled" : ""}${active ? " active" : ""}`;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "page-link";
      button.textContent = label;
      button.disabled = disabled;
      if (ariaLabel) button.setAttribute("aria-label", ariaLabel);
      if (active) button.setAttribute("aria-current", "page");
      button.addEventListener("click", () => {
        currentPage = target;
        update(false);
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      item.append(button);
      pagination.append(item);
    };

    addItem("«", currentPage - 1, { disabled: currentPage === 1, ariaLabel: "Предыдущая страница" });
    for (let page = 1; page <= pages; page += 1) {
      addItem(String(page), page, { active: page === currentPage });
    }
    addItem("»", currentPage + 1, { disabled: currentPage === pages, ariaLabel: "Следующая страница" });
  }

  function update(resetPage = true) {
    if (resetPage) currentPage = 1;
    priceOutput.textContent = formatPrice(Number(priceInput.value));

    const list = sortCards(getFilteredCards());
    const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    currentPage = Math.min(currentPage, pages);
    const visible = list.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    cards.forEach((card) => card.classList.add("d-none"));
    visible.forEach((card) => {
      card.classList.remove("d-none", "is-entering");
      void card.offsetWidth;
      card.classList.add("is-entering");
      grid.append(card);
    });

    resultCount.textContent = `Найдено товаров: ${list.length}`;
    emptyAlert.classList.toggle("d-none", list.length > 0);
    renderPagination(list.length);
  }

  form.addEventListener("input", () => update());
  form.addEventListener("submit", (event) => event.preventDefault());
  form.addEventListener("reset", () => setTimeout(() => update(), 0));
  sortSelect.addEventListener("change", () => update());
  document.getElementById("emptyReset").addEventListener("click", () => form.reset());
  update();
}

function createRow(label, value) {
  const row = document.createElement("tr");
  const head = document.createElement("th");
  head.scope = "row";
  head.textContent = label;
  const cell = document.createElement("td");
  cell.textContent = value;
  row.append(head, cell);
  return row;
}

function renderRelated(product) {
  const grid = document.getElementById("relatedGrid");
  if (!grid) return;
  const related = PRODUCTS.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 3);
  grid.innerHTML = related
    .map(
      (item) => `
      <div class="col-12 col-md-6 col-lg-4">
        <article class="card product-card h-100 shadow-sm">
          <div class="product-card__media">
            <img src="images/${item.img}" class="card-img-top product-card__img" alt="${item.name}" loading="lazy">
          </div>
          <div class="card-body d-flex flex-column">
            <h3 class="card-title h6">${item.name}</h3>
            <p class="price mb-3">${formatPrice(item.price)}</p>
            <a href="product.html?id=${item.id}" class="btn btn-outline-primary mt-auto">Подробнее</a>
          </div>
        </article>
      </div>`
    )
    .join("");
}

function initProduct() {
  const page = document.getElementById("productPage");
  if (!page) return;
  const product = findProduct(params.get("id")) || PRODUCTS[0];
  const field = (name) => page.querySelector(`[data-field="${name}"]`);

  document.title = `${product.name} — Shop_ot_bob`;
  field("name").textContent = product.name;
  field("crumb").textContent = product.name;
  field("short").textContent = product.short;
  field("desc").textContent = product.desc;
  field("price").textContent = formatPrice(product.price);
  field("category").textContent = CATEGORY[product.category];
  field("side").textContent = SIDE[product.side];
  field("orderLink").href = `order.html?product=${product.id}`;
  field("quickBtn").dataset.product = product.id;

  const image = field("image");
  image.src = `images/${product.img}`;
  image.alt = product.name;

  const oldPrice = field("old");
  oldPrice.textContent = product.old ? formatPrice(product.old) : "";
  oldPrice.classList.toggle("d-none", !product.old);

  const badge = field("badge");
  if (product.badge) {
    badge.textContent = product.badge[0];
    badge.className = `badge ${product.badge[1]} position-absolute top-0 start-0 m-3`;
  } else {
    badge.remove();
  }

  const stock = field("stock");
  stock.textContent = product.stock ? "В наличии" : "Под заказ";
  stock.className = `badge rounded-pill ${product.stock ? "text-bg-success" : "text-bg-secondary"}`;

  if (product.category === "daily") {
    const note = field("note");
    note.className = "alert alert-warning small mb-0";
    note.textContent = "Внимание: модель создана для бытовых задач и не предназначена для армрестлинга.";
  }

  const rows = [
    ["Сторона", SIDE[product.side]],
    ["Пол", GENDER[product.gender]],
    ["Назначение", CATEGORY[product.category]],
    ...Object.entries(product.specs),
  ];
  field("specs").replaceChildren(...rows.map(([label, value]) => createRow(label, value)));

  renderRelated(product);
}

function initOrder() {
  const form = document.getElementById("orderForm");
  if (!form) return;
  const select = form.querySelector("#order-product");
  const quantity = form.querySelector("#order-qty");
  const success = document.getElementById("orderSuccess");
  const setText = (id, text) => {
    document.getElementById(id).textContent = text;
  };

  const preset = findProduct(params.get("product"));
  if (preset) select.value = String(preset.id);

  function deliveryCost(subtotal) {
    const checked = form.querySelector('input[name="delivery"]:checked');
    if (!checked) return 0;
    if (checked.value === "courier" && subtotal >= FREE_DELIVERY_FROM) return 0;
    return Number(checked.dataset.cost);
  }

  function updateSummary() {
    const product = findProduct(select.value);
    const count = Math.min(10, Math.max(1, Number(quantity.value) || 1));
    const subtotal = product ? product.price * count : 0;
    const delivery = product ? deliveryCost(subtotal) : 0;

    setText("summaryName", product ? product.name : "Товар не выбран");
    setText("summaryUnit", product ? `${formatPrice(product.price)} за шт.` : "—");
    setText("summaryQty", `${count} шт.`);
    setText("summarySubtotal", formatPrice(subtotal));
    setText("summaryDelivery", product && delivery === 0 ? "бесплатно" : formatPrice(delivery));
    setText("summaryTotal", formatPrice(subtotal + delivery));
    document.getElementById("summaryImg").src = product ? `images/${product.img}` : "images/logo.png";

    return { product, count, total: subtotal + delivery };
  }

  form.querySelectorAll("[data-qty]").forEach((button) => {
    button.addEventListener("click", () => {
      quantity.value = Math.min(10, Math.max(1, (Number(quantity.value) || 1) + Number(button.dataset.qty)));
      updateSummary();
    });
  });

  form.addEventListener("input", updateSummary);
  form.addEventListener("reset", () => {
    setTimeout(() => {
      form.classList.remove("was-validated");
      updateSummary();
    }, 0);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm(form)) return;
    const { product, count, total } = updateSummary();
    setText(
      "orderSuccessText",
      `${fieldValue(form, "name")}, заявка на ${product.name} × ${count} на сумму ${formatPrice(total)} подготовлена. Подтверждение придёт на ${fieldValue(form, "email")}.`
    );
    success.classList.remove("d-none");
    success.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast("Заявка успешно подготовлена!");
    clearForm(form);
    updateSummary();
  });

  document.getElementById("orderSuccessClose").addEventListener("click", () => {
    success.classList.add("d-none");
  });

  updateSummary();
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm(form)) return;
    showToast(`Спасибо, ${fieldValue(form, "name")}! Ответим на ${fieldValue(form, "email")} в течение дня.`);
    clearForm(form);
  });
}

initPhoneInputs();
initQuickOrder();
initCatalog();
initProduct();
initOrder();
initContactForm();
