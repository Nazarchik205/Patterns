//? 1. Использует функции-конструкторы(классы) для создания объектов

//? Синтаксис ES5
// function Server(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }

// Server.prototype.getUrl = function () {
//   return `https://${this.name}?ip:${this.ip}`;
// };

//? Синтаксис ES6
class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
  getUrl() {
    return `https://${this.name}?ip:${this.ip}`;
  }
}

let server1 = new Server("Aboba", 33432);

console.log(server1.getUrl());
