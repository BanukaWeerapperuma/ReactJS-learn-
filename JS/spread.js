// Code: Spread Operator---------------
const arr1 = [1, 2, 3];
const arr2 = ['x', 'y', 'z'];

console.log(arr1, arr2); // [1, 2, 3] ['x', 'y', 'z']

function add(a, b, c) {
    console.log(a + b + c);
}


add(arr1[0] , arr1[1], arr1[2]); // 6
// add(arr1[0], arr1[1], arr1[2]); // 6
add(...arr1); // 6
// add(...arr1); //



//combine the arrays----------------
const arr3 = [4, 5, 6];
const combinedArray = [...arr1,...arr3];
console.log(combinedArray); // [1, 2, 3, 'x', 'y', 'z', 4, 5, 6]


//combine the objects-----------------
const obj1 = {name: 'John' , age: 25};
const obj2 = {name: 'Jane', city: 'New York'};

const combinedObject = {...obj1, ...obj2};
console.log(combinedObject); // {name: 'Jane', age: 25, city: 'New York'}


//pass arguments to a function----------------
function add(a, b, c) {
    console.log(a + b + c);
}
const args = [1, 2, 3];
const obj = {one:10, two: 20, three: 30};  // key: value

add(...args); // 6
//add(...obj); //  object can not pass value as like
add(obj.one, obj.two, obj.three); // 60 // object can pass value as like with key
add(...Object.values(obj)); // 60 // object can pass value as like with key


//add value to array
const arr4 = [1, 2, 3];

const arr5=arr4;    //referance to another array
const arr6 = [...arr4];  //copy array
arr4[1]=10;
console.log(arr5); // [1, 10, 3]
console.log(arr6); // [1, 2, 3 ]

//referance objects
const obj3 = {name: 'John' , age: 25};
const obj4 = obj3;    //referance to another object


//copy object
const obj5 = {...obj3};
obj3.age=30;
console.log(obj3); // {name: 'John' , age: 30}
console.log(obj5); // {name: 'John' , age: 25}



// destructuring object

const person = {name: 'John' , age: 25} ;

const {name, age} = person;
console.log(name); // John
console.log(age); // 25

