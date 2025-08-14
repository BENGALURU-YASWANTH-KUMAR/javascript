//call back means we need pass a functioin as parameter to another function
//we do this because of we have one fuction take more time
//it means hallo take more time on that first print goodbye
//we need order that we use callback after hello we call good bye ok



hello(goodbye);

function hello(callback)
{
    // setTimeout(function (){
        
    //     console.log("hello how are you");},300
    // );
    console.log("hello how are you");
    callback();
}

function goodbye()
{
    console.log("good bye");
}

let numbers=[1,2,3,4,4,7];
for(let a of numbers)
{
    console.log(a);
}



let fruits=["apple","banana","orange","mango"];
fruits.forEach(uppercase);

function uppercase(element,index,array)
{
    array[index]=element.toUpperCase();
    console.log(element);
}


fruits.forEach(firstletterUppercase);
function firstletterUppercase(element,index,array)
{
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
    console.log(element);
}
console.log(fruits);
fruits.forEach(display);

function display(element)
{
    console.log(element);
}