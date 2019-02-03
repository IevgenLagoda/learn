let names = new Set(['John', 'Adam', 'John', 'Lili']);
console.assert(3 == names.size, "Should be 3, but was " + names.size);

names.add('Mike').add('Adam');
console.assert(4 == names.size, "Should be 4, but was " + names.size);

console.assert(names.has('Lili'), 'Lili should be there!');

console.log('For of');
for(let name of names) {
  console.log(name);
}

console.log('ForEach');
names.forEach(name => console.log(name));

console.log('Work with set thru array');
[...names]
  .filter(name => name.startsWith('L'))
  .map(name => name.toUpperCase())
  .forEach(name => console.log(name));
