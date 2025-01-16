const languageBtn = document.querySelector(".language_btn");
const languageDropdown = document.querySelector(".language_dropdown");
const selector = document.querySelector('.language_selector');
const openModalBtn = document.querySelector('.modal-window_open');
const closeModalBtn = document.querySelector('.modal-window_close');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal-window');
const pizzaItems = document.querySelectorAll('.pizza_item');

  
    openModalBtn.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);
    backdrop.addEventListener('click',(event) => (!modal.contains(event.target) && toggleModal()));
   
  function toggleModal() {
    backdrop.classList.toggle('is-hidden');
  }
document.addEventListener("DOMContentLoaded", () => {
  
    languageDropdown.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        const selectedLang = event.target.dataset.lang;
        const selectedFlag = event.target.dataset.flag;
        const selectedText = event.target.textContent;
  
        languageBtn.innerHTML = `
          <img src="${selectedFlag}" alt="${selectedText}" class="flag-icon" />
        `;
  
        if (selector.contains(event.target)) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
          } else {
            dropdown.style.display = 'none';
          }
        // Логіка для оновлення мови сайту (наприклад, зміна URL)
        // console.log(`Selected language: ${selectedLang}`);
      }
    });
  });
  



// pizzaItems.forEach((item) => {
  
//   item.addEventListener('click', () => {
//     const details = item.querySelector('.item_details');
//     const isVisible = details.classList.contains('is-visible');

//     pizzaItems.forEach((otherItem) => {
//       otherItem.querySelector('.pizza_item-main').classList.remove('hide');
//       otherItem.querySelector('.item_details').classList.remove('is-visible');
//     });

//     if (!isVisible) {
//       item.querySelector('.pizza_item-main').classList.add('hide');
//       details.classList.add('is-visible');
//     }
//   });
// });
import { pizza } from './products.js'; // Імпортуйте ваш масив піц
import { drinks } from './products.js'
console.log(pizza)
console.log(drinks)
const pizzaList = document.getElementById('pizzaList');
const drinksList = document.getElementById('drinksList')

// Функція для створення розмітки пункту меню
function createPizzaItem(pizza) {
  return `
    <li class="pizza_item">
      <div class="pizza_item-main">
        <div class="pizza_item-left">
          <div>
            <h2 class="pizza_item-title">${pizza.title}</h2>
            <p class="pizza_item-desk">${pizza.sizes[0].grams} - ${pizza.sizes[2].grams}</p>
          </div>
          <p class="pizza_item-price"><span class="pizza_item-price-num">${pizza.sizes[0].price} - ${pizza.sizes[2].price}</span></p>
        </div>
        <div class="pizza_item-right">
          <img src="${pizza.image}" alt="${pizza.title}" class="pizza_item-img">
        </div>
      </div>
      <div class="item_details is-visible">
        <div class="item_details-img-block">
          <img src="${pizza.image}" alt="${pizza.title}" class="item_details-img">
        </div>
        <div class="item_details-desk">
          <div>
            <h2 class="item_details-desk-title">${pizza.title}</h2>
            <p class="item_details-desk-desk">${pizza.description}</p>
            <ul class="item_details-size-list">
              ${pizza.sizes
                .map(
                  (size) => `
                  <div class="item_details-size-block">
                <li class="item_details-size-item">
                  <button class="item_details-size-btn">
                    ${size.title}
                  </button>
                  
                </li>
                <p class="item_details-desk-price">${size.size}</p>
                <p class="item_details-desk-price">${size.grams}</p>
                <p class="item_details-desk-price">${size.price}</p>
                </div>
              `
                )
                .join('')}
            </ul>
          </div>
          
        </div>
      </div>
    </li>
  `;
}

function createDrinksItem(drinks) {
  return `
    <li class="pizza_item">
      <div class="pizza_item-main">
        <div class="pizza_item-left">
          <div>
            <h2 class="pizza_item-title">${drinks.title}</h2>
            <p class="pizza_item-desk">${drinks.size}</p>
          </div>
          <p class="pizza_item-price"><span class="pizza_item-price-num">${drinks.price}</span></p>
        </div>
        <div class="pizza_item-right">
          <img src="${drinks.image}" alt="${drinks.title}" class="pizza_item-img">
        </div>
      </div>
    </li>
  `;
}

// ${index === 0 ? 'active-size' : ''}
// Генерація списку
pizza.forEach((pizzaItem) => {
  pizzaList.innerHTML += createPizzaItem(pizzaItem);
});
drinks.forEach((drinksItem) => {
  drinksList.innerHTML += createDrinksItem(drinksItem);
});
// Додаємо функціонал розгортання пункту меню
pizzaList.addEventListener('click', (event) => {
  

  const pizzaItem = event.target.closest('.pizza_item');
  if (!pizzaItem) return;

  const details = pizzaItem.querySelector('.item_details');

  const mainContent = pizzaItem.querySelector('.pizza_item-main');
  if (!details || !mainContent) return;
  const isHidden = details.classList.contains('is-visible');

  // Закриваємо всі відкриті деталі
  document.querySelectorAll('.item_details').forEach((detail) => {
    detail.classList.add('is-visible');
  });
  document.querySelectorAll('.pizza_item-main').forEach((main) => {
    main.classList.remove('hide');
  });
  // Відкриваємо поточну деталь
  if (isHidden) {
    details.classList.remove('is-visible');
    mainContent.classList.add('hide');
  }
});
