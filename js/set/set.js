class Set {
  constructor() {
    this.items = {};
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return true;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }

  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(element => unionSet.add(element));
    otherSet.values().forEach(element => unionSet.add(element));
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    this.values().forEach(element => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    })
    return intersectionSet;
  }

  difference(otherSet) {
    const diffSet = new Set();
    this.values().forEach(element => {
      if (!otherSet.has(element)) {
        diffSet.add(element);
      }
    })
    return diffSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    return this.values().every(element => otherSet.has(element));
  }
}

const set1 = new Set();
set1.add(1);
set1.add(2);
const set2 = new Set();
set2.add(2);
set2.add(3);
const set3 = new Set();
set3.add(1);
set3.add(2);
set3.add(3);

console.log("Union", set1.union(set2));
console.log("Intersection", set1.intersection(set2));
console.log("Difference", set1.difference(set2));
console.log("is subset of 2?", set1.isSubsetOf(set2));
console.log("is subset of 3?", set1.isSubsetOf(set3));