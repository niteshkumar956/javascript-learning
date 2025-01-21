/*let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

*/
//let creatDate = new Date(01 , 21 , 2025)
//console.log(creatDate.toDateString());


//let creatDate = new Date("01-01-2025")
//console.log(creatDate.toDateString());
//let timestamp = Date.now()
//console.log(timestamp);

let newDate = new Date()
//console.log(newDate.getSeconds());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);

//${newDate.getMonth()}

 newDate.toLocaleDateString('default',{
    weekday: "long,"
 })