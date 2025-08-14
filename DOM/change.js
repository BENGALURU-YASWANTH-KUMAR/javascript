//step 1 create the element

const newh1=document.createElement("h1");
// step2 add attributes/properties
newh1.textContent="i love my parents";
newh1.id="myh1";


newh1.style.color="red";
newh1.style.textAlign="center";
//stpe3 append element to dom
document.body.append(newh1);//we appendd that will be last elemtn

//you want that as first welement we use prepend

document.body.prepend(newh1);

document.getElementById("box1").prepend(newh1);

//it will insert before box2 
const box2=document.getElementById("box2").removeChild(newh1);
document.body.insertBefore(newh1,box2);


const boxes=document.querySelector(".box");
document.body.insertBefore(newh1,boxes[1]);
// remove html element
