class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = []; //создаем массив существующих уже машин
  }
  create(model, price) {
    let candidat = this.getCash(model);
    if (candidat) {
      return candidat;
    } else {
      let newCar = new Car(model, price);
      this.cars.push(newCar); //после создания добалвяем такую машину в список существующих
      return newCar;
    }
  }
  getCash(model) {
    // метод который проверяет наличие такой машины в нашем кэш-хранилище
    return this.cars.find((c) => c.model === model);
  }
}

const factory = new CarFactory();

let pego2018 = factory.create("pego", 34999); // создали машину с маркой "pego"
console.log(pego2018);

let audi2014 = factory.create("audi", 20199);
console.log(audi2014);

let pego2019 = factory.create("pego", 43000); // пытались создать ещё 1 машину с маркой "pego", но так как такая машина уже есть, мы её достали из кэша
console.log(pego2019);
