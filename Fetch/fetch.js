//fetch => fetch function for making http requests to fetch resources
// (json style data,images,files)
// simplifies asynchronous data fetching with apis to retrieve and send
// data asynchronously over the web 
// fetch (url,{options})

//option weill be mehtod :"GET","POST","DELETE" AND DEFAULT WILL BE GET



// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response=>console.log(response))
// .catch(error=>console.error(error));


// //make fecth data as object

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.error(error));




// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response=>{
//     if(!response.ok){
//         throw new Error("could not fetch resource");
//     }
//     return response.json();
// })
// .then(data=>console.log(data))
// .catch(error=>console.error(error));





//we fetch that not avalable we write try catch to handle error
fetchdata();
async function fetchdata() {
    try{
        const pokemanname=document.getElementById("pokemanName").value.toLowerCase();
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemanname}`);
        if(response.ok){
            const data=await response.json();
            const pokemassprite=data.sprites.front_default;
            const imgElement=document.getElementById("pokemansprite");
            imgElement.src=pokemassprite;
            imgElement.style.display="block";
            console.log(data);
        }
        else{
            throw new Error("we can't fetch this details");            
        }
    }
    catch(error){
        console.error(error);
    }
}



