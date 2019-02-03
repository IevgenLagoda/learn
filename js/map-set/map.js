let scores = new Map([
  ['Mike', 100],
  ['Lili', 120],
  ['John', 80]
]);

scores.set('Nick', 110);

console.log(scores.size + ' records');

for([name, score] of scores.entries()) {
  console.log(`${name} has ${score}`);
}

scores.forEach((score, name) => console.log(`${name} - ${score}`));