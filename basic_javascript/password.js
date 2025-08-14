// let a=prompt("Enter a number");
// if(a%2==0)
// {
//     console.log("Even number");
// }
// else{
//     console.log("Odd number");
// 
// let store=document.getElementsByClassName("heading");
// console.dir(store);
// console.log(store);

// let para=document.getElementsByTagName("p");
// console.dir(para);

// let par=document.querySelector("p");
// console.dir(par);

// let par1=document.querySelectorAll("p");
// console.dir(par1);

// console.dir(document.firstChild);
// console.dir(document.lastChild);



function generate_password(length,lowercase,uppercase,number,special){
    let password="";
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    let num="0123456789";
    let special_characters="!@#$%^&*()_+[]{}|;  :'\",.<>?`~";
    let all_characters="";
    lower= lowercase ? lower : "";
    upper= uppercase ? upper : "";  
    number= number ? num : "";
    special_characters= special ? special_characters : "";
    all_characters= lower + upper + num + special_characters;
    console.log("All characters: " + all_characters);
    for(let i=0;i<length;i++){
        let random_index=Math.floor(Math.random()*all_characters.length);
        password+=all_characters[random_index];
    }
    return password;
}

const lower=true;
const upper=true;
const number=true;
const special=true;
const length=12;
const password=generate_password(length,lower,upper,number,special);
console.log("Generated Password: " + password);