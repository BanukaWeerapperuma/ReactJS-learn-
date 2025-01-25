

//async---------------------------


function one2five(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);


console.log("start");
//setTimeout() is asynchronously running
setTimeout(one2five, 3000); // delay the execution of one2five by 3000 milliseconds

