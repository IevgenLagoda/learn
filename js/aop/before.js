const great = function (message, name) {
  return `${message} ${name}`;
};

const invokeGreat = function(func, name) {
  console.log(func('hi', name));
};

const beforeAdvice = new Proxy(great, {
  apply: function (target, thisArg, args) {
    const message = args[0];
    const msgInCaps = message[0].toUpperCase() + message.slice(1);
    return Reflect.apply(target, thisArg, [msgInCaps, ...args.slice(1)]);
  }
});

invokeGreat(beforeAdvice, "Bob");
