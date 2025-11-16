// 3. Создайте объект на основе ваших данных. 
// Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений и так далее. 
// Чем больше - тем лучше (но не увлекайтесь, до 10 максимум). 
// Подберите правильное название для переменной.

const person = {
  name: 'Hikmatullo',
  age: 20,
  country: 'Росиия',
  city: 'Новосибирск',
  job: 'Программист',
  jobTitle: 'Фронтенд разработчик',
  mail: 'test@mail.com',
  maritalStatus: 'холост',
}

// 4. Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки). 
// Добавьте дополнительное свойство - владелец авто, значением которого будет
// объект, описанный в пункте №3. Желательно добавлять отдельной 
// строкой (имеется ввиду не при создании объекта)

const car = {
  mark: 'porche',
  model: 911,
  productionYear: 2016,
  color: 'хаки',
  bodyStyle: 'купе',
}

car.owner = { ...person }
console.log(car);

// 5. Написать функцию которая аргументом будет принимать объект,
// описанный в пункте №4. Она проверяет, 
// есть ли в объекте свойство "максимальная скорость", 
// если нет - добавляет его и задает значение,
//  если есть - прекращает выполнение (ничего не делает)

function addSpeedParameter(car) {
  if (!car.hasOwnProperty('maxSpeed')) {
    car.maxSpeed = 400;
  }
}

addSpeedParameter(car);
console.log(car);

// 6. Написать функцию, которая получает первым аргументом  — объект, 
// а вторым аргументом — свойство объекта,
// которое нужно вывести и выводит его значение.

const getObjectProperty = (car, mark) => {
  if (car.hasOwnProperty(mark)) {
    console.log(car[mark])
  }
}

getObjectProperty(car, 'mark')

// 7. Создать массив, который содержит названия продуктов (просто строки)

const products = [
  'milk',
  'vegetables',
  'meat',
  'soda',
  'juice',
  'spagetti',
  'cheese',
];

// 8. Создать массив, состоящий из объектов, где объект представляет собой книгу
// (название, автор, год выпуска, цвет обложки, жанр)
// (3-5 книг). После, используя известный нам метод массив,
// добавить еще одну книгу в конец списка. Можете заменить книги на фильмы,
// или другую сущность, идею вы поняли.

const phones = [
  {
    brand: 'samsung',
    model: 'galaxy s6',
    releasedYear: 2015,
    date: 'April 10',
    os: 'Android 5.0',
  },
  {
    brand: 'samsung',
    model: 'galaxy s25',
    releasedYear: 2025,
    date: 'January 22',
    os: 'Android 15',
  },
  {
    brand: 'samsung',
    model: 'galaxy s24 plus',
    releasedYear: 2024,
    date: 'January 17',
    os: 'Android 14',
  },
]

phones.push({
  brand: 'samsung',
  model: 'galaxy s21 ultra',
  releasedYear: 2021,
  date: 'January 14',
  os: 'Android 11',
});

console.log(phones)

// 9. Создать еще один массив, состоящих из тех же книг,
// но относящийся к определенной вселенной
// (Гарри Поттер, Марвел и так далее).
// (Если используете другую, свою сущность - импровизируйте).
// С помощью известного нам метода массива или оператора
// (рекомендую использовать оператор), объединить эти два массива в один

const applePhones = [
  {
    brand: 'apple',
    model: 'iphone se',
    releasedYear: 2016,
    date: 'March 31',
    os: 'ios 15.8.5',
  },
  {
    brand: 'apple',
    model: 'iphone 15 pro',
    releasedYear: 2023,
    date: 'September 22',
    os: 'ios 26.1',
  },
  {
    brand: 'apple',
    model: 'iphone 5',
    releasedYear: 2012,
    date: 'September 21',
    os: 'ios 10.3.4',
  },
]

const allPhones = [...phones, ...applePhones];
console.log(allPhones);

//10. Функция которая проверяет на редкость модель телефон

const checkRarePhone = allPhones.map(object => ({...object, isRare: object.releasedYear >= 2023}))
console.log(checkRarePhone)