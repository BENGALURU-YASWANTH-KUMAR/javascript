//NodeList=staticc collection of HTML elements by(id,class,element)
// can be created by using querySelectorAll()
// similar to an array,but no (map,filter,reduce)
// NodeList won't update to auromatically reflect changes

let buttons=document.querySelectorAll(".button");
console.log(buttons);

//ADD html/css properties

// buttons.forEach(buton=>{
//     buton.style.backgroundColor="green";
//     buton.textContent="Hello";
// });


buttons.forEach(buton=>{
    buton.addEventListener("click",event=>{
        event.target.style.backgroundColor="tomato";
    });
});

buttons.forEach(but=>{
    but.addEventListener("mouseover",event=>{
        event.target.style.backgroundColor="lightblue";
    });
});
buttons.forEach(but=>{
    but.addEventListener("mouseout",event=>{
        event.target.style.backgroundColor="blue";
    });
});


const newbutton=document.createElement("button");
newbutton.textContent="button5";
newbutton.classList="button";
document.body.appendChild(newbutton);
//after changing this also iin nodelist show only four we need to update llikebelow

buttons=document.querySelectorAll(".button");
console.log(buttons);


//we romove buttons
buttons.forEach(butt=>{
    butt.addEventListener("click",event=>{
        event.target.remove();
        buttons=document.querySelectorAll(".button");
        console.log(buttons);
    });
});