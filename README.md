# JavaScript Object-Oriented Programming

## Getting Started

1. Open your command line and navigate to your `repos` directory (if you do not have a `repos` folder, then you can use `mkdir repos` to create one)
2. Use this template repository to start a new project in your repos folder: `git clone <repo_name>`
3. cd `repo_name` to navigate into your new repo directory
4. Start Visual Studio Code and select 'Open Folder'. Then select `repo_name` to open the folder in the editor (or just type `code .` in your terminal inside the repo directory)
5. Follow the instructions on the README.md file to complete exercises
6. Open the app.js file to get started

## Exercise 1

- Expanding from our exercise example during the lesson, create a parent class `class Person {}` with properties for `name`, `pets`, `residence`, and `hobbies`. The Person class will also have a method `info()` and `soundOff()`.

1. Use class notation to create a class named `Person`
2. Declare the `constructor()` method with parameters `name` (string), `pets` (number), `residence` (string), and `hobbies` (array) allowed to be passed in
3. The `constructor()` method assigns `this.` properties to each parameter
4. Declare an `info()` method on the class that `console.log`'s a string giving information about the Person object
   - You should display the `name`, number of `pets`, `residence`, and each hobby from the `hobbies` array
5. Declare a `greeting()` method that `console.log`'s the sound of an Person... ex: `greeting() {console.log("Hello fellow person!")}`

Now we'll create a subclass `Coder` that inherits from our `Person` class

1. Use class notation to create a class named `Coder` that inherits from the `Person` class
2. Declare the `constructor()` method with parameters `name` (string), `pets` (number), `residence` (string), and `hobbies` (array) allowed to be passed in
3. Call the `super()` method inside the `constructor` method and pass in the given parameters
4. Still inside the `constructor` body, assign `this.occupation` to "Full Stack Web Developer"
5. Override the `greeting()` method to `console.log` a custom greeting from a coder...

Finally, let's create instances of our classes

1. Create a variable and assign a Person object to it using the `new` keyword followed by the class `constructor`
2. Create a variable and assign a Coder object to it using the `new` keyword followed by the class `constructor`
3. Call the object methods and `console.log` the object properties to test your work

## BONUS

1. Refactor the `greeting()` methods to accept a `name` parameter and uses in to personalize the greeting output
2. Now when you call the `coder.greeting()` or `person.greeting()` methods, you can pass in the `name` property from an instantiated `Person` or `Coder` object
