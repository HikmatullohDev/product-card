import './homework-4.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './productCards.js';
import './homework-9.js';
import './homework-10/Modal.js';
import './homework-10/Form.js';
import './homework-11/homework-11.js';

// 3. Создать структуру на ваш выбор, как было показано в лекции
// (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру 
// и реализуйте наследуемость классов

class Country {
  constructor(name, population, language) {
    this.name = name;
    this.population = population;
  }
  showCountryInfo() {
    console.log(`${this.name} - в этой стране живет ${this.population} человек.`)
  }
}

class Europe extends Country {
  constructor(name, population, language) {
    super(name, population)
    this.language = language
  }
  showCountryInfo() {
    console.log(`${this.name} - в этой стране живет ${this.population} человек. Язык этой страны ${this.language}`)
  }
}