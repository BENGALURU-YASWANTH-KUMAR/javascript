//error =An object that is created to represent 
//a problem occurs often with user input or establishing a connection


// console.log(x);//it will give reference error we didn't intialize x


//network error
//pomise rejection
//security error

//try()=enclose code that midght potentially cause an error
// catch()=catch and handle any thrown errors from try{}
//finally()={optional} always executes.used mostly for clean up
// ex.close files,close connectiions ,release resources

try{
    console.log(x);
}
catch(error)
{
    console.log(error);
    console.error(error);
}
finally{
    //close files
    //close connections
    //release resources
    console.log("this always excutes");
}
console.log("Hello");
console.log("you have reached the end");//we get type error we speell log as lo 


try{

    const dividend=Number(window.prompt("Enter a dividend"));
    const divisor=Number(window.prompt("Enter a divisor"));


    if(divisor==0)
    {
        throw new Error("you can't divide by zero");
    }

    if(isNaN(dividend) || isNaN(divisor))
    {
        throw new Error("value must be a number ");
    }
    const result=dividend/divisor;
    console.log(result);
}
catch(error)
{
    console.error(error);
}
console.log("you reach end");