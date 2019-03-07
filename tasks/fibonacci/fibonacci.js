function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  let current = 1;
  let prev = 0;
  for(let i = 2; i <= n; i++) {
    let tmp = prev;
    prev = current;
    current += tmp;
  }
  return current;
}

function fibonacci_r(n) {
  if (n <=2) {
    return 1;
  }
  return fibonacci(n -1) + fibonacci_r(n-2);
}

// TODO: to implement memoization

console.log(fibonacci(6));
console.log(fibonacci_r(6));
