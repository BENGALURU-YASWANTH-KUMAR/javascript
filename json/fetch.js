


fetch("person.json")
.then(response=>response.json())
.then(value => console.log(value))

fetch("details.json")
.then(response=>response.json())
.then(value=> value.forEach(val=>console.log(val)))