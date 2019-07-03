function sequential(arr, num) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

const arr = [2,3,4,1,6,5];
console.log(sequential(arr, 4));
console.log(sequential(arr, 10));