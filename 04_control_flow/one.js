/*  if else condition
const temprature = 41;
if(temprature === 41){
    console.log("less than 50")
}else {
    console.log("temperature is greater than equal to 50");
}

const score = 200
if(score > 100){
    var power = "fly"
    console.log(`user power :${power}`);
}
const balance = 1000
// implecet code
if(balance>500) console.log(`test`)


const balance = 5222
if(balance <500){
    console.log(`less thean 750`)
}else if(balance<750){
    console.log(`less then 750`)
}else if(balance<900){
    console.log(`less then 900`)
}else {
    console.log(`balance greater than 900`)
}
    real wolrd scenario
    */
   const userloggedin = true 
   const debitcard = true 
   const loggedinfromgoogle = false 
   const loggedinfromemail = true
   const geustuser= false
   if(userloggedin &&debitcard && 2==3){
    console.log(`allow top buy coursed`);
   }
   if(loggedinfromgoogle || loggedinfromemail || geustuser === true  ){
    console.log(`user loged in`)
   }