 /*
 
 const mynums =[1,2,3,4]

 const numstotal = mynums.reduce( (acc , currval) => {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc * currval;
    
 },4)
 console.log(numstotal);
   */
const shoppingcart = [
   { course : "javascript" , price : 1999},

   { course : "python" , price : 2999},

   { course : "cpp" , price : 1899},

   { course : "ruby" , price : 1799},
]
const totalcost = shoppingcart.reduce((acc , items) => { 
   console.log(`acc : ${acc} and currval : ${items.price}`);
   
   return acc+items.price },0)

console.log(totalcost);
