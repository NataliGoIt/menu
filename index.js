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
  



pizzaItems.forEach((item) => {
  
  item.addEventListener('click', () => {
    const details = item.querySelector('.item_details');
    const isVisible = details.classList.contains('is-visible');

    pizzaItems.forEach((otherItem) => {
      otherItem.querySelector('.pizza_item-main').classList.remove('hide');
      otherItem.querySelector('.item_details').classList.remove('is-visible');
    });

    if (!isVisible) {
      item.querySelector('.pizza_item-main').classList.add('hide');
      details.classList.add('is-visible');
    }
  });
});
