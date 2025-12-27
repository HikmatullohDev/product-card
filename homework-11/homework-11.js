import "/homework-11/Drink.js"
import "/homework-11/Coffee.js"
import "/homework-11/Tea.js"
import "/homework-11/Lemonade.js"
import "/homework-11/Cafe.js"
import { Drink } from "./Drink.js";
import { Tea } from "./Tea.js";
import { Lemonade } from "./Lemonade.js";
import { Coffee } from "./Coffee.js";
import { Cafe } from "./Cafe.js";


const papakha = new Cafe('Папаха', 'г.Махачкала ул.Пушкина 32');
const barbarisTea = new Lemonade('барбарисовый лимонад', '400мл', 300, 10, 'барбарисовый', 'малина');
papakha.orderDrink(barbarisTea);