//dom navigation=The process of navigaing through the structure
// of an html document using javascript

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

// const element=document.getElementById("fruits");
// const firstchild=element.firstElementChild;
// firstchild.style.backgroundColor="yellow";

// const ulelements=document.querySelectorAll("ul");
// ulelements.forEach(ulelements=>{
//     const firstchi=ulelements.firstElementChild;
//     firstchi.style.backgroundColor="red";
// });


// const ulelement=document.querySelectorAll("ul");
// ulelement.forEach(ulelement=>{
//     const firstchi=ulelement.lastElementChild;
//     firstchi.style.backgroundColor="blue";
// });

// const ulelemen=document.querySelectorAll("ul");
// ulelemen.forEach(ulelemen=>{
//     const firstchi=ulelemen.nextElementSibling;
//     firstchi.style.backgroundColor="red";
// });
// const uleleme=document.querySelectorAll("ul");
// uleleme.forEach(uleleme=>{
//     const firstchi=uleleme.previousElementSibling
//     firstchi.style.backgroundColor="red";
// });
// const ulelem=document.querySelectorAll("ul");
// ulelem.forEach(ulelem=>{
//     const firstchi=ulelem.parentElement;
//     firstchi.style.backgroundColor="red";
// });

const elem=document.getElementById("fruits");
const children=elem.children;
console.log(children);
//it print htmlcollections that we use array to access
//don't have foreach method we change to array


Array.from(children).forEach(child=>{
    child.style.backgroundColor="yellow";
});