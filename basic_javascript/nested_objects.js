//nested objects=objects inside of other objects.
// Allows you to represent more complex data structures
// child object is enclosed by a parent object
// person{Adress{},contactInto{}}
//shoppingcart{keyboard{},mouse{},monitor{}}))

const person={
    fullname: "yaswanth reddy",
    age: 27,
    isstudent: false,
    hobbiles: ["coding", "reading", "gaming"],
    address: {
        street: "123 Main St",
        city: "Hyderabad",
        state: "Telangana",
        country: "India"
    }
}

console.log(person.fullname); // Outputs: yaswanth reddy
console.log(person.age); // Outputs: 27
console.log(person.isstudent); // Outputs: false
console.log(person.hobbiles[0]); // Outputs: coding
console.log(person.address.street); // Outputs: 123 Main St
console.log(person.address.city); // Outputs: Hyderabad
console.log(person.address.state); // Outputs: Telangana
console.log(person.address.country); // Outputs: India
console.log("Nested objects example completed");


for(const property in person.address){
    console.log(`${property}: ${person.address[property]}`);
}


class persons{
    constructor(name,age,...adress)
    {
        this.name=name;
        this.age=age;
        this.adress=adress; // Using spread operator to handle multiple addresses
    }
}

class addresss{
    constructor(street, city, state, country) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}

const person1 = new persons("yaswanth", 27,
    new addresss("123 Main St", "Hyderabad", "Telangana", "India"),
    new addresss("456 Elm St", "Bangalore", "Karnataka", "India")
);

console.log(person1.name); // Outputs: yaswanth
console.log(person1.age); // Outputs: 27        
console.log(person1.adress[0].street); // Outputs: 123 Main St
console.log(person1.adress[1].city); // Outputs: Bangalore
console.log("Class with nested objects example completed");



const fruits=[
    {name: "apple", color: "red", price: 1.2},
    {name: "banana", color: "yellow", price: 0.5},
    {name: "cherry", color: "red", price: 2.0},
    {name: "orange", color: "orange", price: 0.8}
];

console.log(fruits[0].name); // Outputs: apple


fruits.push({name: "grape", color: "purple", price: 1.5}); // Adding a new fruit


fruits.forEach(fruit=>console.log(fruit));



const fruitnames=fruits.map(fruit=>fruit.name); // Extracting fruit names
console.log(fruitnames); // Outputs: ["apple", "banana", "cherry",      "orange", "grape"]
console.log("Array of objects example completed");

const price=fruits.filter(fruit=>fruit.price<1); // Filtering fruits with price less than 1
console.log(price); // Outputs: [{name: "banana", color: "yellow", price

const maxfruits=fruits.reduce((max,curr)=>curr.price>max.price?curr:max); // Finding the fruit with maximum price
console.log(maxfruits); // Outputs: {name: "cherry", color: "