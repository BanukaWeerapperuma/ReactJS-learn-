class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }
    getArea(){
        return this.width * this.height;
    }

    static calArea(a,b){
            return a*b;
    }
}

//Creating object instance
const square1 = new Square(5);

// Accessing instance method using object instance
console.log(square1.getArea()); // Output: 25

// Accessing static method using class name
console.log(Square.calArea(5, 5)); // Output: 25

