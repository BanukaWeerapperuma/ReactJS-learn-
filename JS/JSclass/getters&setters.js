class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width; 
    }

    getArea(){
        return this.width * this.height;
    }
    get area(){
        return this.width * this.height;
    }

    set area(newArea){
        this.width = Math.sqrt(newArea);
        this.height = this.width;
        console.log(`New dimensions: width: ${this.width}, height: ${this.height}`);

    }
}




const newSquare = new Square(5);
console.log(newSquare.getArea()); // Output: 25
console.log(newSquare.area);

newSquare.area = 100;

