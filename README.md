# kr2-bootstrap-shop — Shop_ot_bob на Bootstrap

Учебный интернет-магазин **Shop_ot_bob**: руки для армрестлинга и для повседневной жизни.

## Контрольная работа №2

Тема: «CSS-фреймворки: разработка интерфейса на Bootstrap или альтернативном CSS-фреймворке».

## Используемый фреймворк

Bootstrap 5.3.8.

## Способ подключения

Bootstrap подключён через CDN (jsDelivr): CSS в `<head>`, JS Bundle перед `</body>`. Собственный файл `css/custom.css` подключается после Bootstrap.

## Структура проекта

```
kr2-bootstrap-shop/
├── index.html      главная
├── catalog.html    каталог товаров
├── product.html    карточка товара
├── order.html      форма заявки
├── css/
│   └── custom.css
├── images/
├── README.md
└── .gitignore
```

## Реализованные компоненты

- `navbar` с выпадающим меню каталога;
- `card` — карточки товаров;
- `btn` — `btn-primary`, `btn-outline-primary`, `btn-warning` и др.;
- `badge` — «Хит», «Новинка», «Скидка», «Под заказ»;
- `alert` — подсказки пользователю;
- `modal` — быстрая заявка;
- `form-control`, `form-select`, `input-group`, `form-check`;
- `accordion` — частые вопросы на странице товара.

## Автор

ФИО: Исмаилов Полад Вели оглы
Группа: ЭФБО-04-25
