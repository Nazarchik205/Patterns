//? Тут будет пример с подключениями к базе данных (которое может произойти только 1 раз)

class DataBase {
  constructor(data) {
    if (DataBase.exists) {
      return DataBase.instance;
    }
    DataBase.instance = this; // присваиваем текущий контекст класса, который будет использован при повторной попытке "подключения"
    DataBase.exists = true; // здесь мы показываем, что подключение уже осуществлено
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new DataBase("MongoDB");
console.log(mongo.getData());

const mySQL = new DataBase("MySQL"); //пытаемся осуществить ещё одно подключение *при существующем первом*
console.log(mySQL.getData()); // "MongoDB"
