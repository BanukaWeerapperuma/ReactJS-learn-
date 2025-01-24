//array destructuring------------------ 

const arr1 = [1, 2, 3, 4, 5];
const [first,second ,...rest] =arr1;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

//object destructuring------------------

const obj1 = {name: 'John', age: 25, city: 'New York'};
const {name, age,...rest_obj} = obj1;

console.log(name); // Output: John
console.log(age); // Output: 25
console.log(rest_obj); // Output: {city: 'New York'}

//rename key with new name

const obj2 = {name: 'John', age: 25, city: 'New York'};
const {name: newName, age: newAge,...rest_obj2} = obj2;

console.log(newName); // Output: John
console.log(newAge); // Output: 25


