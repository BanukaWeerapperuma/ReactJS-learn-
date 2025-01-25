class Rectangle1{
    constructor(){
        console.log(`Constructing...`);
    }
}

const newRectangle1 = new Rectangle1;

//add the arguments

class Rectangle2{
    constructor(_width ,_height,_color){
        this.width = _width;
        this.height = _height;
        this.color = _color;
        console.log(`Constructing...`);
        console.log(this.width,this.height,this.color);
    }

    getArea() {
        return this.width * this.height;  
    }

}

const newRectangle2 = new Rectangle2(10,5,'red');

console.log(newRectangle2.getArea()); //50

