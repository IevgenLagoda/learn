import defaultToString from './util.mjs';

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

export default class Dictionary {
  constructor(tostrFn = defaultToString) {
    this.tostrFn = tostrFn;
    this.table = {};
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.tostrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    if(this.hasKey(key)) {
      delete this.table[this.tostrFn(key)];
      return true;
    }
    return false;
  }

  hasKey(key) {
    return this.table[this.tostrFn(key)] != null;
  }

  get(key) {
    if (this.hasKey(key)) {
      return this.table[this.tostrFn(key)];
    }
    return undefined;
  }

  clear() {
    this.table = {};
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  keys() {
    return this.keyValues().map(pair => pair.key);
  }

  values() {
    return this.keyValues().map(pair => pair.value);
  }

  keyValues() {
    return Object.values(this.table);
  }

  forEach(calbackFn) {
    const pairs = this.keyValues();
    for(let i = 0; i < pairs.length; i++) {
      const resutl = calbackFn(pairs[i].key, pair[i].value);
      if (resutl === false) {
        break;
      }
    }
  }

  toString() {
    if(this.isEmpty()) {
      return ``;
    }
    const pairs = this.keyValues();
    let objeString  = `${pairs[0].toString()}`;
    for(let i = 1; i < pairs.length; i++) {
      objeString = `${objeString}, ${pairs[i].toString()}`;
    }
    return objeString;
  }
}

const dict = new Dictionary();
dict.set(1, 'Test');
console.log(dict.hasKey(1));
dict.remove(1);
console.log(dict.hasKey(1));
dict.set(2, 'Test');
dict.set(3, 'Woooo');
console.log(dict.toString());