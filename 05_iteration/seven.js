const myarr = [1,2,3,4,5,6,7,8,9,10]
const nums = myarr.map((num)=>num+10)
console.log("Array 1 :" , nums  )


// CHAINING 
// chaining is a way to call multiple methods on the same object
const numbers = myarr
                  .map( (num)=> num *10 )
                  .map( (num)=>num+1)
                  .filter( (num) => num > 50 )
                  console.log("Array 2 :" , numbers );
                  