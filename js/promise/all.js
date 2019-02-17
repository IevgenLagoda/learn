const fs = require('fs-extra');
const request = require('request-promise');

const countPrimes = function(number) {
  if (isNaN(number)) {
    return Promise.reject(`${number} is not a number`);
  }

  return request(`http://localhost:8084?number=${number}`)
    .then(count => `Between 1 and ${number} are ${count} primes`);
};

const countPrimeForEachLine = function(filePath) {
  fs.readFile(filePath)
    .then(content => content.toString())
    .then(content => content.split('\n'))
    .then(lines => Promise.all(lines.map(countPrimes)))
    .then(counts => console.log(counts))
    .catch(err => console.log(err));
};

countPrimeForEachLine('numbers.txt');