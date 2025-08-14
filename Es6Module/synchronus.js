//synchronous= executes line by line consecutively in a swquential manner 
// code that waits for an operation to complete

//asynchronous=allows multiple operations to be performed concurrently withour waiting
// doesn't block the execution flow and allows tha program to continue
// (I/O operations ,network,requests,fetching data)
// Handled with callbacks,promises,Async/Await


//asynchronus


function func1(callback){
    setTimeout(()=>{console.log("Task 1");
    callback()},300);
}

function func2(){

    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);


