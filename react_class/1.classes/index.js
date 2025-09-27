//this.name accesses a property named name
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  haveBirthday() {
    this.age += 1;
    return `Happy Birthday! ${this.name} is now ${this.age} years old.`;
  }
}
