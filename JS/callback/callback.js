/*
function openfile() {
    setTimeout(()=>{
        console.log("file open");
    },3000);
    
}

function addSomething(){
    console.log("added something");
}

function removeSomething(){
    console.log("removed something");
}


//we need to file open , add something,
openfile();
addSomething();

//after open anotherr file and remove something
openfile();
removeSomething();

console.log("----//callback function-----");
*/

//WE CAN DO THIS USING CALLBACK 


//callback function
function openfile(callback) {
    setTimeout(()=>{
        console.log("file open");
        callback();
    },3000);
    
}

function addSomething(){
    console.log("added something");
}

function removeSomething(){
    console.log("removed something");
}


openfile(addSomething);
openfile(removeSomething);
openfile(addSomething);
openfile(removeSomething);
openfile(addSomething);
openfile(removeSomething);
openfile(addSomething);
openfile(removeSomething);







