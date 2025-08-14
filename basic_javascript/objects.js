//object =A collection of related properties and/or methods
// can represent real world objects (people,products,places)
//  object={key:value,function()   }

//this = reference to the objec where this is used
// the object depends on the immediate context)
// person.mame=this.name


const person={
    firstname:"bengaluru",
    lastname:"yaswanth",    
    age:20,
    isStudent:true,
    sayHello:function(){console.log("Hi! I am "+this.firstname+" "+this.lastname)}
};

console.log(person); // Outputs: { firstname: 'bengaluru', lastname: 'yaswanth', age: 20, isStudent: true }
console.log(person.firstname); // Outputs: bengaluru    
console.log(person .lastname); // Outputs: yaswanth
console.log(person.age); // Outputs: 20 
console.log(person.isStudent); // Outputs: true
person.sayHello(); // Outputs: Hi! I am bengaluru yaswanth


//constructor = special method for defining the properties and methods of objests

function persons(name,age,marks)
{
    this.name=name;
    this.age=age;
    this.marks=marks;
}

const person1=new persons("yaswanth",20,90);

console.log(person1); // Outputs: person { name: 'yaswanth', age: 20, marks: 90 }
const person2=new persons("john",22,85); 

console.log(person2); // Outputs: person { name: 'john', age: 22, marks: 85 }