let numbers=[1,2,3,4,5,6,7];
const even=numbers.filter(evenNum);

console.log(even);
const odd=numbers.filter(oddNum);


//we use == adn === diff is == means check is same or nto 
//but === check it will be same and same data type on that onyit will give true opk

console.log(odd);

function evenNum(element)
{
    return element%2==0;
}

function oddNum(element)
{
    return element%2==1;
}


let fruits=["mango","apple","banana"];
const atleast5=fruits.filter(atleast5letters);
console.log(atleast5);

function atleast5letters(element)
{
    return element.length>5;
}