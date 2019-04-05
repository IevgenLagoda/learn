
function insSort(arr) {
  const newArr = [...arr];
  const {length} = newArr;

  for(let i = 0; i < length; i++) {
    let minIndex = i;
    for(let j = minIndex; j < length; j++) {
      if (newArr[minIndex] > arr[j]) {
        let tmp = newArr[minIndex];
        newArr[minIndex] = newArr[j];
        newArr[j] = tmp;
      }
    }
  }

  return newArr;
}

const arr = [7,3,4,5,2,1,6];
console.log(insSort(arr));