// 3. Функция, которая принимает 2 параметра:
//  город и температуру и выводит сообщение в консоль


function showWeatherInfo(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`)
}

showWeatherInfo('Новосибирск', -10);

// 4. Функция сравнивает скорость со скоростью звука и выводит
// если выше — "Сверхзвуковая скорость" если ниже — "Дозвуковая скорость" если равна — "Скорость звука"

const ACOUSTIC_SPEED = 343

function speedometer(speed) {
  if (speed > ACOUSTIC_SPEED) {
    console.log('Сверхзвуковая скорость');
  } else if (speed == ACOUSTIC_SPEED) {
    console.log('Скорость звука');
  } else {
    console.log('Дозвуковая скорость');
  }
}

speedometer(343);

// 5. Функция принимает текущий баланс пользователя и проверяет, хватает ли денег на покупку товара.

const product = 'ноутбук'
const priceTag = 35700

function purchase(balance) {
  if (balance > priceTag) {
    console.log(`${product} приобретен, спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${priceTag-balance}$ пополните баланс`);
  }
}

purchase(30000)

// Функция которая одобряет вступление игрока в команду используя 3 переменных
// минимальный кд, минимальный возраст, сыгранные часы.

const minKd = 3.5
const minAge = 20
const minPlayedHours = 1600

function approvePlayer(age, kd, playedHours) {
  if (age > minAge && kd > minKd && playedHours > minPlayedHours) {
    console.log('Добро пожаловать в нашу команду, вы подходите нам по возрасту, сыгранным часам и кд');
  } else {
    console.log('К сожалению вы не проходите по минимальным требованиям');
  }
}

approvePlayer(20, 3.7, 1780)