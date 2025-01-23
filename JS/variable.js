//
// Description: This is a test file for JavaScript.
//

//jScript variables----------------

var age = 25;
let name = "John";
const isMarried = false;

console.log(age); // Output: 25
console.log(name); // Output: John
console.log(isMarried); // Output: false

//variable scope---------------------

//let -block scope
//var - function scope
//const - block scope

var _var =10;
let _let = 20;
const _const = 30;

function scope(){
    var _var2 = 40;
    let _let2 = 50;
    const _const2 = 60;

    if(true){
        var _var3 = 70;
        let _let3 = 80;
        const _const3 = 90;
        console.log('Block scope: ', _var3, _let3, _const3);

    }
    console.log('Block scope: ', _var3);
    console.log('Function scope: ', _var2, _let2, _const2);
}


scope();

//variable name---------------------

//variable name can start with letter, $, _
//variable name can't start with number
//variable name can't start with reserved keyword
//variable name is case sensitive

let $name = "John";
let _age = 25;
let is_married = false;
let Is_married = false;

console.log($name); // Output: John


//variable types--------------------

let number = 25; //number type
let string = "John"; //string type
let boolean = true; //boolean type
let object = {name: "John"}; //object type
let array = [1, 2, 3]; //array type
let func = function(){}; //function type
let n = null; //null type

//variable cases--------------------

let lowerCaseName = "john";
let UpperCaseName = "JOHN";
let camelCaseName = "johnDoe";
let snakeCaseName = "john_doe";
let kebabCaseName = "john-doe";

//variable casting--------------------

let str = "25";
let num = Number(str); //string to number

let bool = Boolean("true"); //string to boolean

let arr = [1, 2, 3];
let strArr = arr.toString(); //array to string

let obj = {name: "John"};
let strObj = JSON.stringify(obj); //object to string

console.log(num); // Output: 25
console.log(bool); // Output: true
console.log(strArr); // Output: 1,2,3
console.log(strObj); // Output: {"name":"John"}

//variable operators--------------------

let a = 10;
let b = 5;

console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50

a++; //increment
b--; //decrement


//variable comparison--------------------

console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a >= b); // Output: true
console.log(a <= b); // Output: false

console.log(a == b); // Output: false (value comparison)
console.log(a === b); // Output: false (type comparison)
console.log(a == "10"); // Output: true (value comparison)
console.log(a === "10"); // Output: false (type comparison)
console.log(a == null); // Output: false (value comparison)
console.log(a === null); // Output: false (type comparison)

console.log(a!= b); // Output: true (value comparison)
console.log(a!== b); // Output: true (type comparison)

//variable assignment--------------------

let c = a; //copy value
let d = a; //copy reference

console.log(c); // Output: 10
console.log(d); // Output: 10



//variable conditional--------------------

if(a > b){
    console.log("a is greater than b");
} else if(a < b){
    console.log("a is less than b");
} else {
    console.log("a is equal to b");
}

//variable ternary--------------------

let result = a > b? "a is greater than b" : "a is less than b";
console.log(result); // Output: a is greater than b

//variable loops--------------------

for(let i = 0; i < 5; i++){
    console.log(i);
}

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


let arr2 = [1, 2, 3, 4, 5];

for(let num of arr2){
    console.log(num);
}

while(a > 0){
    console.log(a);
    a--;
}

















