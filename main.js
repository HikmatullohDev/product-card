// Покраска всех карточек
const productCard = document.querySelectorAll('.card-container');
const colorChangeAllCard = document.querySelector('#color-change-all-card');
const brownColor =' #cd853f';

colorChangeAllCard.addEventListener('click', () => {
  productCard.forEach((card) => card.style.backgroundColor = brownColor)
})

// Покраска первой карточки
const greyColorHash =' #c0c0c0';
const firstProductCard = document.querySelector('.card-container');
const colorChangeFirstCardButton = document.querySelector('#color-change-first-card');

colorChangeFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = greyColorHash
})

// гугл страница в новой вкладке (сделал ссылку через константу для переиспользования в дальнейшем)
const openGoogleButton = document.querySelector('#open-google');
const googleURL = 'https://google.com';

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы точно хотите открыть Google?')
  if (answer === true)
    window.open(googleURL)
}

// Вывод консоль лог
const outputNotificationButton = document.querySelector('#output-notification');
outputNotificationButton.addEventListener('click', () => outputNotification('делаю домашку номер 4.'));

function outputNotification(massage) {
  alert(massage)
  console.log(massage)
}

// Вывод контента заголовка в консоль лог
const mainTitle = document.querySelector('.main-title');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent)
})

// cмена цвета кнопки с первого на второй цвет и со второго на первый
const colorToggleButton = document.querySelector('.bg-grey');

colorToggleButton.addEventListener('click', () => {
  colorToggleButton.classList.toggle('bg-brown');
})