//JSON => (JavaScript object notation data interchange format
// used for exchanging data between a server and a web application)
// JSON files (key:value) or (value1,value2,value3)
// JSON.stringify => converts a js object to a json string.
// JSON.parse() => converts a JSON  string to a JS object 


const arr=["yesh","chari","deva","vinith","ranjith"];
console.log(arr);

const arrtoSting=JSON.stringify(arr);
console.log(arrtoSting);


const stringtoobject=JSON.parse(arrtoSting);
console.log(stringtoobject);


let ex={
    name:"yesh",
    age:"20",
    gender:"male",
};

console.log(ex);
//i want converete this object into string ok


let extoString=JSON.stringify(ex);
console.log(extoString);

let obj={
    detais:["name","age"],
    scores:[20,30,40],
    name:"yesh"
}

console.log(obj);
