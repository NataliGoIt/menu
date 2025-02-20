import { pizza, pizzaUa, pizzaEng, drinks } from './products.js'; 
const languageBtn = document.querySelector(".language_btn"),
 languageDropdown = document.querySelector(".language_dropdown"),
 openModalBtn = document.querySelector('.modal-window_open'),
 closeModalBtn = document.querySelector('.modal-window_close'),
 backdrop = document.querySelector('.backdrop'),
 modal = document.querySelector('.modal-window'),
 modalDelivery = document.querySelector('.modal_delivery-window'),
 openModalDelivery = document.querySelector('.delivery_btn'),
 backdropDelivery = document.querySelector('.modal_delivery'),
 closeDeliveryBtn = document.querySelector('.modal_delivery-window_close'),
 searchInput = document.getElementById("search-input"),
 pizzaList = document.querySelector('.pizza_list'),
 pizzaListRo = document.getElementById('pizzaListRo'),
 pizzaListUa = document.getElementById('pizzaListUa'),
 pizzaListEng = document.getElementById('pizzaListEng'),
 drinksList = document.getElementById('drinksList');
  
//  ///////////////////// contacts modal window //////////////////////////////////////////////////////////
    openModalBtn.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);
    backdrop.addEventListener('click',(event) => (!modal.contains(event.target) && toggleModal()));
    function toggleModal() {
      backdrop.classList.toggle('is-hidden');
    }
//  /////////////////// delivery modal window /////////////////////////////////////////////////////////
    openModalDelivery.addEventListener('click', toggleModalDelivery);
    closeDeliveryBtn.addEventListener('click', toggleModalDelivery);
    backdropDelivery.addEventListener('click',(event) => (!modalDelivery.contains(event.target) && toggleModalDelivery()))
 
  function toggleModalDelivery(){
    backdropDelivery.classList.toggle("modal-open")
  }
//  ////////////////// language modal window///////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", () => {
  languageBtn.addEventListener('click', (e)=>{
    toggleModalLang()
    
    // languageDropdown.contains(e.target) && toggleModalLang()
    // languageDropdown.classList.add("language_dropdown-active")
  })
  function toggleModalLang(){
    languageDropdown.classList.toggle("language_dropdown-active")
  }
// let selectedLang;
//   document.addEventListener("click", (e) => {
// if (languageDropdown.classList.contains("language_dropdown-active")) {
//       if (e.target.tagName === "LI") {
//         const selectedLang = e.target.dataset.lang;
//         const selectedFlag = e.target.dataset.flag;
//         const selectedText = e.target.textContent;
//         console.log(selectedLang);
//         languageBtn.innerHTML = `
//           <img src="${selectedFlag}" alt="${selectedText}" class="flag-icon" />
//         `;
//         return selectedFlag;
//       }
//     }
    
//   });
//   console.log(selectedLang)

  // });
  
        // Логіка для оновлення мови сайту (наприклад, зміна URL)
        // console.log(`Selected language: ${selectedLang}`);




// /////////////////////////////////////////   menu /////////////////////////////////////////////////////
const buttons = {
  pizza: document.getElementById('pizza-btn'),
  burger: document.getElementById('burger-btn'),
  drinks: document.getElementById('drinks-btn'),
};
const sections = {
  pizza: document.getElementById('pizza'),
  burger: document.getElementById('burger'),
  drinks: document.getElementById('drinks'),
};

// Функція для визначення активної секції
function updateActiveButton() {
  let activeSection = null;

  Object.keys(sections).forEach((key) => {
    const section = sections[key];
    const rect = section.getBoundingClientRect();

    // Якщо секція в середині екрану, вона активна
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      activeSection = key;
    }
  });

  // Оновлюємо класи кнопок
  Object.keys(buttons).forEach((key) => {
    if (key === activeSection) {
      buttons[key].classList.add('menu_item-active');
    } else {
      buttons[key].classList.remove('menu_item-active');
    }
  });
}


// Відстеження скролу для оновлення активної кнопки
window.addEventListener('scroll', updateActiveButton);

// Ініціалізація
updateActiveButton();

// if(selectedLang === "ua"){
//   createPizzaItem(pizzaUa)
// }
// Функція для створення розмітки пункту меню
function createPizzaItem(pizza) {
  return `
    <li class="pizza_item item-title">
    <div class="trans">
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
          <div class="gradient"></div>
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
      </div>
    </li>
  `;
}

function createDrinksItem(drinks) {
  return `
    <li class="drinks_item item-title">
      // <div class="pizza_item-main">
        <div class="pizza_item-left">
          <div>
            <h2 class="pizza_item-title ">${drinks.title}</h2>
            <p class="pizza_item-desk">${drinks.size}</p>
          </div>
          <p class="pizza_item-price"><span class="pizza_item-price-num">${drinks.price}</span></p>
        </div>
        <div class="pizza_item-right">
          <img src="${drinks.image}" alt="${drinks.title}" class="drinks-img">
        </div>
      // </div>
    </li>
  `;
}

if(pizzaListRo){
  pizza.forEach((pizzaItem) => {
    pizzaListRo.innerHTML += createPizzaItem(pizzaItem);
  });
} else if(pizzaListEng){
  pizzaEng.forEach((pizzaItem) => {
    pizzaListEng.innerHTML += createPizzaItem(pizzaItem);
  });
}else if(pizzaListUa){
  pizzaUa.forEach((pizzaItem) => {
    pizzaListUa.innerHTML += createPizzaItem(pizzaItem);
  });
}
// Генерація списку

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

// ///////////////////////////////////////////////// search ////////////////////////////////////////////
const items = document.querySelectorAll(".pizza_item");
// desc = document.querySelectorAll(".item_details-desk-desk");

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  items.forEach(item => {
    const title = item.querySelector(".pizza_item-title")?.textContent.toLowerCase() || "";
    const description = item.querySelector(".item_details-desk-desk")?.textContent.toLowerCase() || "";

    if (title.includes(query) || description.includes(query)) {
      item.style.display = ""; // Показати елемент, якщо знайдено в назві або описі
    } else {
      item.style.display = "none"; // Сховати, якщо не знайдено
    }
  });
 
});
const clearButton = document.querySelector("#clearSearch");

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() !== "") {
    clearButton.classList.remove("hidden");
  } else {
    clearButton.classList.add("hidden");
  }
});

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.dispatchEvent(new Event("input")); // Оновлюємо список
});

// searchInput.dispatchEvent(new Event("input"));
  // items.forEach(item => {
  
  //   const text = item.textContent.toLowerCase();
  //   if (text.includes(query)) {
  //     item.style.display = ''; 
    
  //   } else {
  //     item.style.display = 'none'; 
  //   }

  // });
// });