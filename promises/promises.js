//promise=An object that manages asynchronous operations.
// wrap a promise object around {asynchronous code}
// "I promise to return a value"
// PENDING=RESOLVED OR REGECTED
// NEW PROMISE((RESOLVE,REJECT)=>{ASYCHronous code})

//do these chores in order

//1.walk te dog
//2.clean the kitchen
//3.take out the trash

//instead callback we use promises with method chain

function walkdog(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalk=false;
            if(dogwalk){

                resolve("dog");
            }
            else{
                reject("rejected");
            }

        },1700);
    });
}

function cleankicken(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kichen=true;
            if(kichen){

                resolve("kitchen");
            }
            else{
                reject("rejected1");
            }
        },700);
    });
}

function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trash=true;//false
            if(trash){
                resolve("trash");
            }
            else{
                reject("rejected2");
            }
        },100);
    });
}


walkdog().then(value=>{console.log(value);
    return cleankicken()}).then(value=>{console.log(value);return takeOutTrash()}).
    then(value=>{console.log(value);console.log("you finished all tasks")})
    .catch(error=>console.error(error));


//async/await =>
// Async => makes a function return a promise
// Await => makes an async function wait for a promise
// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue


async function dochores(){
    if(walkdog){

        const walkdogres=await walkdog();
        console.log(walkdogres);
    
        const cleankickenres=await cleankicken();
        console.log(cleankickenres);
        
        const takeOutTrashres=await takeOutTrash();
        console.log(takeOutTrash);
    }
    else{
        
            console.error(error);
        
    }
    
}


// async function runtasks(){
//     try{
//         await walkdog();
//     }
//     catch(e)
//     {
//         console.error(error);
//     }
//     try{
//         await cleankicken();
//     }
//     catch(e)
//     {
//         console.error(error);
//     }
//     try{
//         await takeOutTrash();
//     }
//     catch(e)
//     {
//         console.error(error);
//     }
//     console.log("all tasks are completely finished");
// }
async function runTasks() {
  try {
    await walkdog();
  } catch (e) {
    console.error("walkdog failed:", e);
  }

  try {
    await cleankicken();
  } catch (e) {
    console.error("cleankicken failed:", e);
  }

  try {
    await takeOutTrash();
  } catch (e) {
    console.error("takeOutTrash failed:", e);
  }

  console.log("Finished attempting all tasks");
}

// function walkdog(){
//     setTimeout(()=>{
//         console.log("you walk the dog");
//     },1700);
// }

