
/*
const user ={
    username:"nitesh",
    price: 1999,
    welcomemessage : function (){
    console.log(`${this.username} , hello user welcome to the website`);
}
}
//user.welcomemessage()
//user.username ="sam"
//user.welcomemessage()

console.log(this)
function one() {
    let username = "nitesh"
    //price= 1999,
   // welcomemessage : function (){
    console.log(`${this.username} , hello user welcome to the website`);
}
one()

const chai = function(){
    let username = "nitesh"
    //price= 1999,
   // welcomemessage : function (){
    console.log(`${this.username} , hello user welcome to the website`);
}
chai()

// arrow function 
   variable name
       |
       v
const chai = () => {
    let username = "nitesh"
    console.log(this);
}
chai()
*/
const aurcode =  ( num1 , num2) =>  num1 + num2

console.log(aurcode(3,3))

const stringadd = (str1 , str2) => str1+str2
console.log(" Nitesh " , " kumar ")

const addTwo = (num1, num2) => ({username: "Nitesh"})
console.log(addTwo())