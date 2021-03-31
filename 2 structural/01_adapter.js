//? Позволяет пользоватся старым интерфейсом, но внедряя новый функционал

class OldCalc {
  //старый интерфейс
  constructor() {}
  operations(n1, n2, operator) {
    switch (operator) {
      case "add":
        return n1 + n2;
      case "sub":
        return n1 - n2;
      default:
        return NaN;
    }
  }
}

class NewCalc {
  //новый интерфейс
  constructor() {}
  add(n1, n2) {
    return n1 + n2;
  }
  sub(n1, n2) {
    return n1 - n2;
  }
  pow(n1, n2) {
    return n1 * n2;
  }
}

class AdaptClass {
  // Адаптер который объединяет новый функционал в старом интерфейсе
  constructor() {
    this.calc = new NewCalc();
  }
  operations(n1, n2, operator) {
    switch (operator) {
      case "add":
        return this.calc.add(n1, n2);
      case "sub":
        return this.calc.sub(n1, n2);
      case "pow":
        return this.calc.pow(n1, n2);
      default:
        return NaN;
    }
  }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(12, 30, "add"));

const newCalc = new NewCalc();
console.log(newCalc.sub(67, 25));

const adaptCalc = new AdaptClass();
console.log(adaptCalc.operations(6, 7, "pow")); //воспользовались старым интерфейсом но с новым функционалом
