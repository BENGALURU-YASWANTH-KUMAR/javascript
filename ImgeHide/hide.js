const button=document.getElementById("mybutton");
const image=document.getElementById("myimg");

// button.addEventListener("click",event=>
// {
//     if(image.style.display==="none"){
//         image.style.display="block";
//         button.textContent="Hide";
//     }
//     else{
        
//         image.style.display="none";
//         button.textContent="show";
//     }
// }
// );


button.addEventListener("click",event=>
    {
    if(image.style.visibility==="hidden"){
        image.style.visibility="visible";
        button.textContent="Hide";
    }
    else{
        
        image.style.visibility="hidden";
        button.textContent="show";
    }
}
);