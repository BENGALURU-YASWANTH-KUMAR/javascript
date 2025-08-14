const numbers=[1,2,3,4,5,6,7];
const squeare=numbers.map(function(element)
{
    return Math.pow(element,2);
});
console.log(squeare);
//create a new array with square of each element using map
const s=numbers.forEach(square);
console.log(s);

function square(element)
{
    return Math.pow(element,2);
}
function display(element)
{
    console.log(element);
}