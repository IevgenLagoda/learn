class Employee {
  constructor(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
  }

  get fullName() {return `${this.firstName} ${this.lastName}`};
  get age() {return new Date().getFullYear() - this.yearOfBirth};
}

const printInfo = function(employee) {
  console.log(`First name is ${employee.firstName}`);
  console.log(`Full name is ${employee.fullName}`);
  console.log(`Age is ${employee.age}`);
}

const joe = new Employee('Joe', 'Smith', 1985);

const handler = {
  get: function(target, propertyName, reciever) {
    if (propertyName == 'firstName') {
      console.log(`Target is Joe? ${joe == target}`);
      console.log(`Property name is ${propertyName}`);
      console.log(`Reciever is Smith? ${proxySmith == reciever}`);
    }

    if (propertyName == 'age') {
      console.log(`It's not polite to ask :)`);
    }

    Reflect.get(target, propertyName);
  }
};

const proxySmith = new Proxy(joe, handler);
printInfo(proxySmith);
