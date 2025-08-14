//closure=A function defined inside another function
// this inner function has access to the variables
// and scopes of the outer function
// allows for private variables and state maintanance
// used frequently in 35 frameworks:react ,vue,angular, etc.    

// function outer(){
//     let message="Hello from outer function";
//     function inner(){
//         console.log(message); // Accessing outer function's variable
//     }
// }
// messge="Goodbye from outer function";
// outer();

// function increament(){
//     let count=0;
//     count++;
//     console.log(`count increament function: ${count}`);
// }
// increament(); // Outputs: count increament function: 1
// increament(); // Outputs: count increament function: 1
// increament(); // Outputs: count increament function: 1



function outer(){

    //everything within the outer function will be closure
    let message="Hello";
    function inner()
    {
        console.log(message);
    }
    inner();

}
//we can't update message now becaulse i not scope there message scope
//will be within the outer function ok
outer();

function createcount()
{

    let count=0;
    function increment()
    {
        count++;
        console.log(`count increased ${count}`);
    }
    return {increment};
}
//any number of times we call weget output only be one not more than that because i 
//every intialize to zero and increment one ok


//er are callind outer function once we get 1
const counter=createcount();
//after we call innter cunction increment that will inc by 1 everytime
counter.increment();
counter.increment();
counter.increment();
counter.increment();

// increment();
// increment();


function createGame(){

        let score=0;
        function increasescore(points)
        {
            score+=points;
            console.log(`+${points}pts`);
        }
        
        function decreasescore(points)
        {
            score-=points;
            console.log(`-${points}pts`);
        }
        
        function getscore()
        {
            return score;
        }
        return {increasescore,decreasescore,getscore};
        
    }


    const game=createGame();
    game.increasescore(5);
    game.decreasescore(3);
    game.increasescore(2);
    console.log(`final score is ${game.getscore()}`);

    //before we put these methods in creategame function we change anything ok
    // increasescore(5);
    // decreasescore(3);
    // increasescore(2);
    
    // console.log(`final score is ${getscore()}`);