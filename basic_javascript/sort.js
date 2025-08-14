//sort()=> method used to sort elements of an array in placce.
// sorts elements as strings in lexicographical order by default
// sort() modifies the original array and returns a reference to the same array

let fruits = ["banana", "apple", "cherry", "date"];
fruits.sort(); // Sorts the array in place  
console.log(fruits); // Outputs: ["apple", "banana", "cherry", "date"]


let numbers = [5, 2, 8, 1, 4];
numbers.sort(); // Sorts numbers in ascending order

//numbers.sort((a, b) => a - b); // Sorts numbers in ascending order
// Using a custom compare function to sort numbers in ascending order
//numbers.sort((a,b)=>b-a); // Sorts numbers in descending order
numbers.sort((a, b) => a - b); // Sorts numbers in ascending order      

numbers.sort((a, b) => b - a); // Sorts numbers in descending order
numbers.re
console.log(numbers); // Outputs: [1, 2, 4, 5, 8]


const people=[{},
    {name: "John", age: 30,gpa:9.0},
    {name: "Alice", age: 25,gpa:8.5},
    {name: "Bob", age: 35,gpa:9.5}  ,
    {name: "Charlie", age: 28,gpa:8.0}
];

people.sort((a,b)=>a.age-b.age); // Sorts by age in ascending order
console.log(people); // Outputs: sorted array by age
people.sort((a, b) => b.gpa - a.gpa); // Sorts by GPA in descending order
console.log(people); // Outputs: sorted array by GPA
