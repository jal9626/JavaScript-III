/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is using the this keyword to bind to the entire global scope    
* 2. Implicit Binding is using this to refer to the object that is within its scope
* 3. New Binding is used when creating an object from a constructor function
* 4. Explicit Binding is used when using the call method and apply method
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding  
    console.log(this);


// Principle 2
// code example for Implicit Binding
const hobbit = {
    name: 'Samwise',
    food: 'taters',
    cook: function() {
        console.log(`${this.name} cooks some ${this.food}`)
    }
}
hobbit.cook()


// Principle 3
// code example for New Binding
function CordialPerson(greeter){
    this.greeter = greeter;
    this.greeting = 'Hello';
    this.speak = function() {
        console.log(`${this.greeting}, ${this.greeter}`)
    };
}
const jerry = new CordialPerson('Newman');
console.log(jerry);
console.log(jerry.speak())


// Principle 4
// code example for Explicit Binding // 
const person = {
    name: 'Ashley'
}
const skills = [`HTML, CSS, JS`];
function introduce(skills) {
    console.log(`Hello!  My name is ${this.name} and I like to program in ${skills}.`);
}
introduce.call(person, skills);