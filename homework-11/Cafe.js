export class Cafe {

  constructor(name, adress) {
    this.name = name;
    this.adress = adress;
  }

  getCafeInfo() {
    return `Наше кафе называется ${ this.name }, вы можете посетить по адресу ${ this.adress } и насладиться нашим меню, ждем вас!`;
  }

  orderDrink(drink) {
    return drink.serveDrink();
  }

  getDrinkInfo(drink) {
    return drink.getInfo();
  }

}