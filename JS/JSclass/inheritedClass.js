class person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
        console.log(`${this.name} person created`);
    }

}

class srilankn extends person {
    constructor(_name, _age, _nationality){
        super(_name, _age);
        this.nationality = _nationality;
        console.log(`${this.name} ,${this.nationality} srilankan person created`);
    }

}



const john = new person("John", 32);

const silva = new srilankn("silva",45 , "buddhist");