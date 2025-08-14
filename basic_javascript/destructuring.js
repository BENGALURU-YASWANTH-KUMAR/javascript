// distructuring == extract values from arrays and objects,
//   then assign them to variables in a convenient way
//   []=to perform destructuring on arrays
//   {}=to perform destructuring on objects
//    5 examples

//swap the values of two variables using destructuring

let a=5;
let b=10;
[a,b]=[b,a]; // Swapping values using destructuring
console.log(a); // Outputs: 10  
console.log(b); // Outputs: 5
//example 2: swap values in an array
// Using destructuring to swap values in an array

const colors=["red","green","blue"];
[colors[0],colors[1]]=[colors[1],colors[0]]; // Swapping first two colors
console.log(colors); // Outputs: ["green", "red", "blue"]


//example 3: assign array elements to variables
const fruits=["apple","banana","cherry","orange"];
const [fruit1, fruit2,...extrafruits] = fruits; // Destructuring assignment
console.log(fruit1); // Outputs: apple
console.log(fruit2); // Outputs: banana     
console.log(extrafruits); // Outputs: ["cherry"]
console.log("Destructuring example 3 completed");

//exmaple 4: extract values from objects

const person1 = {
    firstname:"yaswanth",
    lastname:"reddy",
    age:27,
    job:"Frontend Developer"
}

const person2={
    firstname: "John",
    lastname: "Doe",
    age: 30,
    // job: "Software Engineer"
}

const {firstname, lastname, age, job} = person1; // Destructuring assignment
console.log(firstname); // Outputs: yaswanth
console.log(lastname); // Outputs: reddy
console.log(age); // Outputs: 27
console.log(job); // Outputs: Frontend Developer
const {first,last,age1,job1="software engineer"} = person2; // Renaming variables
console.log(first); // Outputs: John
console.log(last); // Outputs: Doe
console.log(age1); // Outputs: 30
console.log(job1); // Outputs: software engineer (default value)
console.log("Destructuring example 4 completed");


//example 5: destructure in function parameters
function displayperson({firstname, lastname, age, job = "Unknown"}) {
    console.log(`Name: ${firstname} ${lastname}, Age: ${age}, Job: ${job}`);
}
// function displayperson({ firstname, lastname, age, job = "Unknown" }) {
//     console.log(`Name: ${firstname} ${lastname}, Age: ${age}, Job: ${job}`);
// }


displayperson(person1);

displayperson(person2);