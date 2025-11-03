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
const outputLogButton = document.querySelector('#output-console-log');
outputLogButton.addEventListener('click', () => outputConsoleLog('делаю домашку номер 4.'));

function outputConsoleLog(massage) {
  alert(massage)
  console.log(massage)
}

// Вывод контента заголовка в консоль лог
const outputMainTitle = document.querySelector('.main-title');

outputMainTitle.addEventListener('mouseover', () => {
  console.log(outputMainTitle.textContent)
})

// cмена цвета кнопки с первого на второй цвет и со второго на первый
const colorChangeButton = document.querySelector('.color-change-button');

colorChangeButton.addEventListener('click', () => {
  colorChangeButton.classList.toggle('bg-brown');
})