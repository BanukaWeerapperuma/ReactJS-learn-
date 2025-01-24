//javascript rest functions----------------
const arr1 = [1, 2, 3, 4, 5, 6];
function sum(a, b, c) {
    console.log(a+b+c);
}
sum(...arr1); // 6


//get sum of all elements-------------------
function sum(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
    
}

console.log(sum(...arr1));

//get average of all elements-------------------
function average(...args) {
    let total = sum(...args);
    return total / args.length;
}

console.log(average(...arr1));

//get max of all elements-------------------

function max(...args) {
    let maxNum = args[0];
    for(let i = 1; i < args.length; i++){
        if(args[i] > maxNum){
            maxNum = args[i];
        }
    }
    return maxNum;
}

console.log(max(...arr1));

//get min of all elements-------------------

function min(...args) {
    let minNum = args[0];
    for(let i = 1; i < args.length; i++){
        if(args[i] < minNum){
            minNum = args[i];
        }
    }
    return minNum;
}

console.log(min(...arr1));

//get sum of even numbers-------------------

function sumEven(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++){
        if(args[i] % 2 === 0){
            total += args[i];
        }
    }
    return total;
}

console.log(sumEven(...arr1));

//get sum of odd numbers-------------------

function sumOdd(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++){
        if(args[i] % 2!== 0){
            total += args[i];
        }
    }
    return total;
}

console.log(sumOdd(...arr1));

//get sum of prime numbers-------------------

function isPrime(num) {
    if(num <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

//sum of prime numbers
function sumPrime(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++){
        if(isPrime(args[i])){
            total += args[i];
        }
    }
    return total;
}

console.log(sumPrime(...arr1));

//get sum of non-prime numbers-------------------

function sumNonPrime(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++){
        if(!isPrime(args[i])){
            total += args[i];
        }
    }
    return total;
}

console.log(sumNonPrime(...arr1));

//get sum of square numbers-------------------

function sumSquare(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++){
        total += args[i] * args[i];
    }
    return total;
}

console.log(sumSquare(...arr1));

//get sum of cube numbers-------------------

function sumCube(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++){
        total += args[i] * args[i] * args[i];
    }
    return total;
}

console.log(sumCube(...arr1));

//get sum of factorial numbers-------------------

function factorial(num) {
    if(num === 0 || num === 1){
        return 1;
    }
    return num * factorial(num - 1);
}

function sumFactorial(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++){
        total += factorial(args[i]);
    }
    return total;
}

console.log(sumFactorial(...arr1));

//get sum of Fibonacci numbers-------------------

function fibonacci(num) {
    if(num <= 0){
        return 0;
    }
    if(num === 1){
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function sumFibonacci(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++){
        total += fibonacci(args[i]);
    }
    return total;
}

console.log(sumFibonacci(...arr1));

