//.reduce() => reduce elements of an array
// in a single value
// it takes two parameters


let prices=[5,30,25,15,27];
const total=prices.reduce(sum,0);
//console.log(total);

console.log(`$${total.toFixed(2)}`);
console.log('${total.toFixed(2)}'); // toFixed(2) formats the number to 2 decimal places
function sum(accumulator,currentValue)
{
    return accumulator + currentValue;
}
