const great = function (message, name) {
  return `${message} ${name}`;
};

const invokeGreat = function(func, name) {
  console.log(func('hi', name));
};

const beforeAndAfterAdvice = new Proxy(great, {
  apply: function (target, thisArg, args) {
    const newArgs = ['Howdy', ...args.slice(1)];
    const result = Reflect.apply(target, thisArg, newArgs);
    return result.toUpperCase();
  }
});

invokeGreat(beforeAndAfterAdvice, "Bob");
