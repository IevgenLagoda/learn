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

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseLoseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    let has = 0;
    const tableKey = this.toStrFn(key);
    for(let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseLoseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const pair = this.table[hash];
    if (ValuePair != null)  {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  get(key) {
    const pair = ths.table[this.hashCode(key)];
    return pair ? pair.value : undefined;
  }
}