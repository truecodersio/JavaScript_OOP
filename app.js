console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name,pets,residence,hobbies =[]){
    this.name=name;
    this.pets=pets;
    this.residence=residence;
    this.hobbies=hobbies;

}
addHobby(hobby){
     this.hobbies.push(hobby);
}
greet(name){
    console.log(`hello fellow ${name}!`);
}
removeHobby(remHob){
    // function filterHobby(hobby)
    // { if (hobby === remHob )
    //     return false;
    // }else { 
    //     return true;
    // }
   this.hobbies= this.hobbies.filter((hob)=>hob != remHob );
}
   
}
// let sharr= new Person("aman",1,"ajf",["all","afjk"])
// console.log(sharr);
let aman =new Person("aman",2,"slater avenue",["sleep","coding","repeat"]);
aman.removeHobby("repeat");
aman.addHobby("soccor");
console.log(aman);
// aman.greet();

console.log("EXERCISE 2:\n==========\n");
class Coder extends Person{
    constructor(name,pets,residence,hobbies=[]){
        super (name,pets,residence,hobbies);
        this.occupation="Full Stack web Developer"
    }
    greet(name){
        console.log(`hello  ${name}! how are you`);
    }
}
 let bob= new Coder("bob",23,"hills",["gym","reading","love"]);
 console.log(bob);
 bob.greet(aman.name);
 aman.greet(bob.name);
                                                 


// console.log("EXERCISE 3:\n==========\n");


console.log("EXERCISE 4:\n==========\n");

class Calculator {
    result = 0;
    a;
    b;
    op;
    shouldContinue = false;
  
    start() {
      do {
        this.a = this.getInput("First Number", true);
        this.b = this.getInput(
          "Second Number (give no number to use previous result)",
          true
        );
        this.op = this.getInput(
          "Operation: ('+' for addition, '-' for subtraction, '*' for multiplication, '/' for division)",
          false
        );
  
        if (isNaN(this.b)) {
          this.b = undefined;
        }
  
        switch (true) {
          case isNaN(this.a):
            alert("Invalid input");
            break;
          case this.op == "+":
            this.add(this.a, this.b);
            this.displayResult();
            break;
          case this.op == "-":
            this.subtract(this.a, this.b);
            this.displayResult();
            break;
          case this.op == "*":
            this.multiply(this.a, this.b);
            this.displayResult();
            break;
          case this.op == "/":
            this.divide(this.a, this.b);
            this.displayResult();
            break;
          default:
            alert("Invalid operation");
        }
  
        let continueInput = this.getInput("Again? (type 'yes')", false);
  
        this.shouldContinue = continueInput == "yes";
      } while (this.shouldContinue);
    }
  
    add(a, b) {
      if (b === undefined) {
        this.result += a;
      } else {
        this.result = a + b;
      }
  
      return this.result;
    }
  
    subtract(a, b) {
      if (b === undefined) {
        this.result -= a;
      } else {
        this.result = a - b;
      }
  
      return this.result;
    }
  
    multiply(a, b) {
      if (b === undefined) {
        this.result *= a;
      } else {
        this.result = a * b;
      }
  
      return this.result;
    }
  
    divide(a, b) {
      if (b === undefined) {
        this.result /= a;
      } else {
        this.result = a / b;
      }
  
      return this.result;
    }
  
    clear() {
      this.result = 0;
    }
  
    displayResult() {
      alert(this.result);
    }
  
    getInput(msg, isNumber) {
      let input = prompt(msg);
  
      if (isNumber) {
        return parseFloat(input);
      }
  
      return input;
    }
  }
  
  let calculator = new Calculator();
  
  calculator.start();