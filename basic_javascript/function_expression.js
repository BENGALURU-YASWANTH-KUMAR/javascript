//function expression =a way to define functions as values of variables
//1.callbacks in asynchromous operations
//2.higher -order functions
//3.closures
//4.event Listeners
//5.array methods like map, filter, reduce, forEach 

const numbers=[1,2,3,4,5];
const max=numbers.reduce(function(prev,curr){
    return Math.max(curr,prev);
}

);
console.log(max); // Outputs: 5

//arrow functions=a concise way to write function expressions
///ggod for simple functions that you use only once (parameters) =>some code

const hello=()=>console.log("Hello, World!");
hello(); // Outputs: Hello, World!

const name=(name)=>console.log("Hello, "+name+"!");
name("Alice"); // Outputs: Hello, Alice!

const person=(name,age)=>console.log(`hell my name is ${name} and i am ${age} years old`);
person("Bob", 30); // Outputs: hell my name is ${name} and i am ${age} years odf


const square=numbers.map((element)=>Math.pow(element,2));
console.log(square); // Outputs: [1, 4, 9, 16, 25]