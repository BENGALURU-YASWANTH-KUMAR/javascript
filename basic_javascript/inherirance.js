//inherritance =allows a new class to inherit properties and methods
// from an sxisting class (parent ->child)
// with the help of the extends keyword
// allows code reusability and a hierarchical relationship between classes


// Inheritance in JavaScript using ES6 classes
// The child class inherits properties and methods from the parent class    
// The child class can also have its own properties and methods

// Example of inheritance in JavaScript using ES6 classes




class Animal{
    alive=true;
    eat()
    {
        console.log("This animal eats food");
    }
    sleep()
    {
        console.log("This animal sleeps");
    }
}

class Dog extends Animal{
    name="Dog";
}
class Cat extends Animal{
    name="Cat"; 
} 
class lion extends Animal{
    name="Lion"; 
}

const dog=new Dog();
const cat=new Cat();    
const lions=new lion();
console.log(dog.alive); // Outputs: true
console.log(cat.alive); // Outputs: true
console.log(lions.alive); // Outputs: true   
dog.eat(); // Outputs: This animal eats food
cat.sleep(); // Outputs: This animal sleeps
lions.eat(); // Outputs: This animal eats food
dog.sleep(); // Outputs: This animal sleeps


//super keyword =used to call the constructor of the parent class
// It can also be used to call methods of the parent class  
// super() must be called before using 'this' in the constructor of the child class

//this represents the current instance of the class
// It is used to access properties and methods of the current instance

//super represent parent class
// It is used to access properties and methods of the parent class


class a{
     constructor()
    {
        console.log("constructor of class a");
        
    }   
}
class b extends a{
     constructor()
    {
        super();
       // Calls the constructor of class a
        console.log("constructor of class b");
    }
}

let obj=new a();
let obj1=new b(); // This will call the constructor of class a first, then class b
console.log(obj); // Outputs: a {}
console.log(obj1); // Outputs: b {}

class Animals{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class Dogs extends Animals{
    constructor(name,age,runspeed){
        super(name,age); // Calls the constructor of Animals
        this.runspeed=runspeed;
    }
}

class fishs extends Animals{
    constructor(name,age,swimspeed){
        super(name,age); // Calls the constructor of Animals
        this.swimspeed=swimspeed;
    }
}

class birds extends Animals{
    constructor(name,age,flyingheight){
        super(name,age); // Calls the constructor of Animals
        this.flyingheight=flyingheight;
    }
}

const d=new Dogs("Dog", 5, 20);
const f=new fishs("Fish", 2, 10);    
const ba=new birds("Bird", 3, 50);
console.log(d.name); // Outputs: Dog
console.log(d.age); // Outputs: 5       
console.log(d.runspeed); // Outputs: 20

console.log(f.name); // Outputs: Fish
console.log(f.age); // Outputs: 2
console.log(f.swimspeed); // Outputs: 10

console.log(ba.name); // Outputs: Bird
console.log(ba.age); // Outputs: 3
console.log(ba.flyingheight); // Outputs: 50
