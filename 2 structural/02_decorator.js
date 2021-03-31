class Server {
  //основной instance
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server /*принимаем instance*/) {
  let creationalTime = Date();
  server.isAWS = true; //добавляем новый функционал
  server.infoAWS = function () {
    return server.url + ` Start time: ${creationalTime} `;
  };
  return server;
}

let server1 = aws(
  new Server(
    "14.34.35.198",
    8080
  ) /*Обернули instance в декоратор добавляя функионал*/
);
console.log(server1.isAWS); // true
console.log(server1.infoAWS());
