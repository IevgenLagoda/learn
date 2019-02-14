const nums = [1, 2, 4, 5];
const arr = nums.slice();
const arr2 = Array.from(nums);
const arr3 = Array.of(2);

let i = 1;
const arr4 = Array(4).fill(Math.round(Math.random() * 10));

// filter
let arr5 = nums.filter((a) => a % 2 ==0);

// map
let arr6 = nums.map(a => a *a);

// reduce
let sum = nums.reduce((s, a) => s+a, 0);

console.log(sum);