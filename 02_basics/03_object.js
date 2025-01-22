
const mySym = Symbol("key01")

const user = {
    name : "Nitesh",
    ["Fullname"] : "Nitesh Kumar",
    [mySym]: "mykey01",
    age :21,
    Email : "nitesh@adc.com",
    islogedin : false,
    location : "Noida"
}
/*
console.log(user.name) // not a ideal method to access the object
console.log(user["name"])
console.log(user[mySym])

user["Email"] =  "nitesh@adc.com"
//user["Email"] =  "nitesh@goat.com"
console.log("original_data" ,user)
user["Email"] =  "nitesh@goat.com"
console.log("updated_data" ,user)
// 
// By adding the freeze method 
user["Email"] =  "nitesh@goat.com"
Object.freeze(user) // freeze the object 
user["Email"] =  "nitesh@gpt.com"
console.log("updated_data" ,user)
*/
// OBJECT FUNCTION

console.log( user)
user.greeting= function() {
    console.log("hello js user")
}
user.greetingtwo= function() {
    console.log(`hello js user,  ${this.name}`)
}
console.log(user.greeting())
console.log(user.greetingtwo())
