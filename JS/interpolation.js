//template------------------

const text1 ="this is a text";

// nextline -> \n
//tab space->\t

// using backticks(``) for multiline strings
const text2 =`this 
is an 
another 
text`;

console.log(text1); // this is a text
console.log(text2); 
    // Output: this 
    //         is an 
    //         another
    //         text


// Template literals and expressions
//interpolation function-------------------


const name = "John";
const age = 25;

const text3 = 'Hello, my name is ' + name + '.' + 'I am '+ age+ ' years old.';
console.log(text3); // Hello, my name is John. I am 25 years old.

//using interpolation function-------------------
const text4 = `Hello, my name is ${name}. I am ${age} years old.`;
console.log(text4); // Hello, my name is John. I am 25 years old.







