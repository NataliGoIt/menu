const languageBtn = document.querySelector(".language_btn");
const languageDropdown = document.querySelector(".language_dropdown");
const selector = document.querySelector('.language_selector');
const openModalBtn = document.querySelector('.modal-window_open');
const closeModalBtn = document.querySelector('.modal-window_close');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal-window');
  
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
  
        // Змінюємо прапорець і текст кнопки
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
  
  