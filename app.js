console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  info() {
    console.log(
      `The Person is ${this.name}, with ${this.pets}, from ${
        this.residence
      }, who enjoys ${this.hobbies.join(" and ")}.`
    );
  }
  greeting(name) {
    console.log(`Hello ${name}!`);
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting(name) {
    console.log(`Hello ${name}! I'm a ${this.occupation}`);
  }
}

let person = new Person("Wilem", 2, "Ceald", [
  "playing corners",
  "reading",
  "listening to music",
]);
person.info();

let coder = new Coder("Ben", 0, "Birmingham", [
  "running",
  "reading",
  "scenic driving",
]);
coder.greeting(person.name);
