// function hello()
// {
//     console.log("hello how are you sorry for the delay");
// }

// setTimeout(hello, 3000); // Calls hello after 3 seconds


// setTimeout(function(){
//     console.log("This is a s seconds delayed message");}
// ,5000);



// //functions expression =a way to define functions as values of variables

// const numbers=[1,2,3,4,5];
// const squares=numbers.map(function(element){
//     return Math.pow(element,2);
// });
// console.log(squares); // Outputs: [1, 4, 9, 16, 25]

// // function hi()
// // {
// //     window.alert("hi how are you");
// // }
// // setTimeout(hi,5000);

// const timeid=setTimeout(function(){window.alert("hi who are you")},3000);
// clearTimeout(timeid);//after callinnd this one time it 
// //will clear timeout this id will be cleared


// const timeoutid=setTimeout(()=>{window.alert("hi who are you")},3000);
// clearTimeout(timeoutid);

let timeoutid;

function startTimer(){
    setTimeout(()=>window.alert("Hello"),3000);
    console.log("starter");
}

function clearTimer(){
    clearTimeout(timeoutid);
    console.log("cleared");
}

