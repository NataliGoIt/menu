const languageBtn = document.querySelector(".language-btn");
const languageDropdown = document.querySelector(".language-dropdown");
const selector = document.querySelector('.language-selector');
document.addEventListener("DOMContentLoaded", () => {
  
    languageDropdown.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        const selectedLang = event.target.dataset.lang;
        const selectedFlag = event.target.dataset.flag;
        const selectedText = event.target.textContent;
  
        // Змінюємо прапорець і текст кнопки
        languageBtn.innerHTML = `
          <img src="${selectedFlag}" alt="${selectedText}" class="flag-icon" />
          ${selectedText}
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
  
  