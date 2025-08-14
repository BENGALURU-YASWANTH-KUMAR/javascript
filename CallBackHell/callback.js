//callback hell=situation in javascript where callbacks
// are nested within other callbacks to the
// degree where the code is difficult to read.
// old pattern to handle asynchronous functions.
// use promises-async/await to avoid callback hell

//these are callback functions we need call each and evryone
//because asyncronous once not run sequentially ok
//we want in order we user callback for each and evryone this not readable not good complex once
//like  we take 100 functions on that time we didn't do like this right

function task1(callback){
    setTimeout(()=>{

        console.log("task 1 completed");
        callback();
    },3000);
}

function task2(callback){
    setTimeout(()=>{

        console.log("task 2 completed");
        callback();
    },2000);
}

function task3(callback){
    setTimeout(()=>{

        console.log("task 3 completed");
        callback();
    },1000);
}

function task4(callback){
    setTimeout(()=>{

        console.log("task 4 completed");
        callback();
    },2000);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>
                console.log("all tasks are completed")
            );
        });
    });
});
