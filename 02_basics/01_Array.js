/*const myArr = new Array( 1,1,3,4,5)
console.log(myArr[1])
const Arr1 = [1,2,3,5,6]
console.log(Arr1)

// Array Method

//Arr1.push(6)
//console.log(Arr1)

//slice

 const MyArr1 = [1,2,3,45,6,7]
 const A = MyArr1.slice(0,3)
 console.log("A" , A)

SPLICE

const MyArr2 = [1,2,3,45,6,7]
console.log("B" ,MyArr2)
 const B = MyArr2.splice(0,3)
 
 console.log("B" ,B )
 */
 const myArr = [0, 1, 2, 3, 4, 5]

 console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);