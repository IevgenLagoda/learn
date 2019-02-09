interface Person {
  name: string;
  age: number;
  isMarried: boolean;
  other: any;
}

class OnePerson implements Person {
  name = 'Jonn';
  age = 12;
  isMarried = false;
  other = 'Special';

  constructor(name, age, isMarried, other) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.other = other;
  }
}

const person:OnePerson = new OnePerson('Ivan', 20, true, 'Nooo');
