//event Listeners=Listen for specific events to create interactive web pages
// events:click,mouseover,mouseout,.addEventListeber(event,callback);

//const { events } = require("aws-amplify/api");

//events:keydown,keyup
//const myBox =document.getElementById("mybox");

// function chagecolor(event){
//     // console.log(event);
//     event.target.style.backgroundColor="red";
//     event.target.style.textContent="Good Bye "
// }
// myBox.addEventListener("click",chagecolor);


// myBox.addEventListener("click",(event)=>{
//     event.target.style.backgroundColor="red";
//     event.target.textContent="Hai ,How are you?";
    
// });

// myBox.addEventListener("mouseover",event=>{
//     event.target.style.backgroundColor="blue";
//     event.target.textContent="Good Bye";

// });
// myBox.addEventListener("mouseout",event=>{
//     event.target.style.backgroundColor="lightgreen";
//     event.target.textContent="Click me "

// });

// const myButton=document.getElementById("mybutton");
// myButton.addEventListener("click",(event)=>{
//     event.target.style.backgroundColor="red";
//     event.target.textContent="Hai ,How are you?";
    
// });

// myButton.addEventListener("mouseover",event=>{
//     event.target.style.backgroundColor="blue";
//     event.target.textContent="Good Bye";

// });
// myButton.addEventListener("mouseout",event=>{
//     event.target.style.backgroundColor="lightgreen";
//     event.target.textContent="Click me "

// });
// //based on we do click,mouseover,mouseout on button i changes on box we use box instead even.target

// myButton.addEventListener("click",(event)=>{
//     myBox.style.backgroundColor="red";
//     myBox.textContent="Hai ,How are you?";
    
// });

// myButton.addEventListener("mouseover",event=>{
//    myBox.style.backgroundColor="blue";
//     myBox.textContent="Good Bye";

// });
// myButton.addEventListener("mouseout",event=>{
//     myBox.style.backgroundColor="lightgreen";
//     myBox.textContent="Click me "

// });

const mybox=document.getElementById("mybox");
const moveAmount=10;
let x=0;
let y=0;

document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;
        }
        mybox.style.top= `${y}px`;
        mybox.style.left= `${x}px`;
        // mybox.style.down= `${y}px`;
        // mybox.style.right= `${y}px`;
    }
});
document.addEventListener("keydown",event=>{
    mybox.style.backgroundColor="red";
    mybox.textContent="Moving";
});

document.addEventListener("keyup",event=>{
    
    mybox.style.backgroundColor="lightgreen";
    mybox.textContent="Moving";
    
});
