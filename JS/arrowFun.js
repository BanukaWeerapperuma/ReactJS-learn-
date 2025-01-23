
// Arrow functions are a more concise way to write function 
// expressions. They utilize a new token, =>, 
// that looks like a fat arrow, hence the name!

//normal function----------------
function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("banuka")); 

//arrow function----------------


const greetArrow = (name) => {
  return `Hello ${name}`;
}
console.log(greetArrow("banuka"));

// arrow function with two (more) parameter----------------

const addArrow = (num1, num2) => {
    return num1 + num2;
  }
  
  console.log(addArrow(10, 20));


// arrow function with argument----------------
function addArg(num1,num2,num3){
    return arguments;
}
console.log(addArg(10,20,30)); 
// { '0': 10, '1': 20, '2': 30 }

const addArroow = (num1,num2, num3)=>{
    return arguments;
}
console.log(addArroow(10,20,30));
// { '0': 10, '1': 20, '2': 30 }


// arrow function with implicit return (single line)----------------
const addArrowImplicit = (num1, num2) => num1 + num2;
console.log(addArrowImplicit(10, 20));

// arrow function with object shorthand----------------
const person = (name, age) => ({name, age});
console.log(person("banuka", 25));
console.log(person("Nimal", 24));

// arrow function with rest parameters----------------
const addAll = (...nums) => {
    let total = 0;
    nums.forEach(num => total += num);
    return total;
  }
  
  console.log(addAll(10, 20, 30, 40, 50));

// arrow function with default parameters----------------
const greetDefault = (name = "John") => `Hello ${name}`;
console.log(greetDefault());
console.log(greetDefault("banuka"));

// arrow function with arrow syntax----------------
const greetArrowSyntax = name => `Hello ${name}`;
console.log(greetArrowSyntax("banuka"));

// arrow function with spread operator----------------
const numbers = [10, 20, 30, 40, 50];
console.log(addAll(...numbers));


// arrow function with this----------------

this.name = "John";
console.log(this.name); // John

//-----

const greet_person = {  
    name: "John",
    greet: () => {
        console.log(`Hello ${this.name}`);
    }
};

console.log(this.name); // John
greet_person.greet(); // Hello John

// Arrow functions do not have their own this.
// They are not well suited for defining object methods.
// The value of this is not the calling object.





