function binary(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
       return mid;
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 3, 4, 6, 15];
console.log(binary(arr, 4));
console.log(binary(arr, 10));