const great = function (message, name) {
  return `${message} ${name}`;
};

const invokeGreat = function(func, name) {
  console.log(func('hi', name));
};

const aroundAdvice = new Proxy(great, {
  apply: function (target, thisArg, args) {
    if (args[1] == 'Doc') {
      return `What's up Doc?`;
    } else {
      return Reflect.apply(target, thisArg, args);
    }
  }
});

invokeGreat(aroundAdvice, "Bob");
invokeGreat(aroundAdvice, "Doc");
