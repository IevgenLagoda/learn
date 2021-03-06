const langsAndAuthors = new Map([
  ['JavaScript', "Eich"], ['Java', 'Gosling'],
]);

const accessLangsMap = function(map) {
  console.log(`Number of languages ${map.size}`);
  console.log(`Author of JavaScript is ${map.get('JavaScript')}`);
  console.log(`Asked fluently ${map.JavaScript}`);
};

const handler = {
  get: function(target, propertyName, receiver) {
    if (Reflect.has(target, propertyName)) {
      const property = Reflect.get(target, propertyName);
      if (property instanceof Function) {
        return property.bind(target);
      }
      return property;
    }
    return target.get(propertyName);
  }
};

const proxy = new Proxy(langsAndAuthors, handler);

accessLangsMap(proxy);