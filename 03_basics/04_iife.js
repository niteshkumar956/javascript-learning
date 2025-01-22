// Immediately envoke function expression IIFE
/*
function chai(){
   console.log(`database`)

}
chai()

// iife  use
(function chai(){
    console.log(`database`)
})();

// using arrow function in iife
(()=>{
    console.log(`database2`)
})()

// name iife

(function chai(name){
    console.log(`database ${name}`);
})("nitesh") ; 
*/


// simpled iife  unmaned iife

( (id) => {
    console.log(`database id is ${id}`) ; 
} )(10001); 