const proxy = new Proxy(Map.prototype, {
  get: function(target, properyName, receiver) {
    return receiver.get(properyName);
  }
});

Reflect.setPrototypeOf(Map.prototype, proxy);

const langsAndAuthors = new Map([
  ['JavaScript', "Eich"], ['Java', 'Gosling'],
]);

console.log(langsAndAuthors.get('JavaScript'));
console.log(langsAndAuthors.JavaScript);
