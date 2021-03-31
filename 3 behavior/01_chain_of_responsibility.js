class MyCalc {
  constructor(initValue = 42) {
    this.result = initValue;
  }
  add(val) {
    this.result += val;
    return this;
  }
  sub(val) {
    this.result -= val;
    return this;
  }
  pow(val) {
    this.result *= val;
    return this;
  }
  dil(val) {
    this.result = Math.round(this.result / val);
    return this;
  }
}

let calc1 = new MyCalc(1);
console.log(calc1.add(9).add(10).sub(5).pow(3).dil(5).result); // 1 + 9 + 10 - 5 * 3 / 5 = 9
