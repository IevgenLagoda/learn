function bubbleSort(arr) {
  let {length} = arr;
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

const arr = [2, 3, 1, 4, 5];
console.log(bubbleSort(arr));