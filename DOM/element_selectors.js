//element selector = methods used to target and manipulate html elements
// they sllow you to select one or multiple html elements
// from the dom (document object model)

//1.document.getElementById() element or null when it is wrong name given
//2.document.getElementsClassName() //html collectioins
//3.document.getElementsByTageName() //html collections
//4.document.querySelector() //element or null
//5.document.querySelectorAll() //nodelist

const name="yaswanth";
const message=document.getElementById("welcome-msg");
message.textContent+=name===""?'Guest':" "+name;
console.log(message);

console.log("\n");

const name1="yaswanthkumar";
const mes=document.getElementsByClassName("myclass");
console.log(mes);
mes.textContent+=name1===""?'Guests':name1;
console.log(mes);

const fruit=document.getElementsByClassName("fruits");
console.log(fruit);

for(let f of fruit)
{
    f.style.backgroundColor="yellow";
}

//html collections doesn't support forEach() we typecast into an array
Array.from(fruit).forEach(fruit=>{
    fruit.style.backgroundColor="red";
});


const h4elements=document.getElementsByTagName("h4");
console.log(h4elements);

for(let ele of h4elements){
     ele.style.backgroundColor="blue";
}

Array.from(h4elements).forEach(e=>{
    e.style.backgroundColor="red";
});

const listelements=document.getElementsByTagName("li");
Array.from(listelements).forEach(l=>{
    l.style.backgroundColor="liGhtGreen";
});



//it select first one which match 
const element=document.querySelector(".fruits");
element.style.backgroundColor="purple";


const element1=document.querySelector("h4");
element1.style.backgroundColor="purple";


const foods=document.querySelectorAll(".fruits");
console.log(foods);