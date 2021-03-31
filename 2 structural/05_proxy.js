function networkFetch(url) {
  /*симулируем запрос*/
  return `${url} - Ответ с сервера`;
}
const cache = new Set();
let proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, argArray) {
    //вызываем эту функцию с текущим контекстом
    let url = argArray[0];
    if (cache.has(url)) {
      return `${url} - Ответ с кэша`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, argArray);
    }
  },
});

console.log(proxiedFetch("aboba"));
console.log(proxiedFetch("aboba"));
