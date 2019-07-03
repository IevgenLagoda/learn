
const qsort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...qsort(left), pivot, ...qsort(right)];
}

const arr = [1,2,5,3,12,6];
console.log(qsort(arr));