export class Cafe {

  constructor(name, adress) {
    this.name = name;
    this.adress = adress;
  }

  getCafeInfo() {
    return console.log(`Наше кафе называется ${this.name}, вы можете посетить по адресу ${this.adress} и насладиться нашим меню, ждем вас!`);
  }

  orderDrink(drink) {
    return drink.getPreparedDrink();
  }

  getDrinkInfo(drink) {
    return drink.getInfo();
  }

}