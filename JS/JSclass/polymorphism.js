class Animal{
    constructor(){
        console.log("animal constructor");
    }

    makeSound(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal{
    constructor(){
        super(); // Call the constructor of the parent class (Animal)
        console.log("Dog constructor");
    }

    makeSound(){
        console.log("Dog barks");
    }
}

const newAnimal = new Animal();
newAnimal.makeSound();

const Tommy = new Dog();
Tommy.makeSound(); // Output: Dog makes a sound