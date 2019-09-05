//  Find the second minimum element of an array
function secondMinimum(arr) {
    return [...arr].sort((a, b) => a - b)[1];
}
console.log(`${secondMinimum([1,3,2,4])} should be 2`);

// First non-repeating integers in an array
function firstUnique(arr) {
    const map = {};
    for(let el of arr) {
        if (!map[el]) {
            map[el] = 1;
        } else {
            map[el]++;
        }
    }
    for(let idx in map) {
        if (map[idx] == 1) {
            return idx;
        }
    }
}
console.log(`${firstUnique([1,1,1,2,2,3])} should be 3`);

// Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    let left = 0;
    let right = 0;
    const merged = [];
    while(left <= arr1.length && right <= arr2.length) {
        if (arr1[left] && arr1[left] < arr2[right]) {
            merged.push(arr1[left++]);
        } else {
            if (arr2[right]) {
                merged.push(arr2[right++]);
            } else {
                merged.push(arr1[left++]);
            }
            
        }
    }
    return merged;
}
console.log(`${mergeSortedArrays([1,3,5], [2,4])} shouold be [1,2,3,4,5]`);
console.log(`${mergeSortedArrays([1,3,5], [2,4,6])} shouold be [1,2,3,4,5,6]`);

// Rearrange positive and negative values in an array
function rearrangePosNegValues(arr) {
    return arr.map(el => el * -1);
}
