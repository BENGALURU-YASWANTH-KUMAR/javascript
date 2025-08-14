//classlist =Element property in javascript used to interact
// with an element's list of classes css classes
// allows you to make reusable classes for many elements
// across your webpage

//add()
//remove()
//toggle(reomve if present ,add if not)
//replace(oldclass,newclass)
//contains()


const mybutton=document.getElementById("mybutton");
mybutton.classList.add("enable")
mybutton.classList.remove("enable");



const mybutton1=document.getElementById("mybutton");
mybutton.classList.add("hover");
mybutton.classList.remove("hover");


// mybutton.addEventListener("mouseover",event=>{
//     event.target.classList.add("hover");
// })
// mybutton.addEventListener("mouseout",event=>{
//     event.target.classList.remove("hover");
// })

//we use add and remove for adding and removing 
//instead we use toggle it will add not there remove when it present

mybutton.addEventListener("mouseover",event=>{
    event.target.classList.toggle("hover");
})
mybutton.addEventListener("mouseout",event=>{
    event.target.classList.toggle("hover");
})


const myButton2=document.getElementById("mybutton");
myButton2.classList.add("enable");


myButton2.addEventListener("click",event=>
    {
        if(event.target.classList.contains("desable")){
            event.target.textContent+=" disable enable class";
        }
        else{

            event.target.classList.replace("enable","desable");
        }
    }
);

const myh1=document.getElementById("myh1");
myh1.classList.add("enable");

myh1.addEventListener("click",event=>
    {
        if(event.target.classList.contains("desable")){
            event.target.textContent+=" disable enable class";
        }
        else{

            event.target.classList.replace("enable","desable");
        }
    }
);