function selectionSort(arr) {
  const {length} = arr;
  let indexMin;
  for(let i = 0; i < length - 1; i++) {
    indexMin = i;
    for(let j = i; j < length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      const tmp = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = tmp;
    }
  }
  return arr;
}

const arr = [2, 3, 1, 5, 4];
console.log(selectionSort(arr));