function factorial(num) {
  let res = 1;
  for (let i = num; i > 1; i--) {
    res *= i;
  }
  return res;
}

function factorial_r(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial_r(num - 1);
}

console.log(factorial(5));
console.log(factorial_r(8));
