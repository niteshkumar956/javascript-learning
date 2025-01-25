//three.js

//  FOR OF LOOP
/*
const arr= [1,2,3,4,5];
for (const num of arr) {
console.log(num);


}

const greeting =`hello world`
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
    
}
    */
// MAPS 
// map store only unique value in it

const map = new Map();
map.set('In', 'india')
map.set('US', 'usa')
map.set('UK', 'uk')
map.set('In', 'india')
//console.log(map);


for (const [key,value] of map) {
    console.log(key,':-',value);
    
}
    const object ={
        'game1 ': "nhf",
        'game2': "spiderman"
    }
//for (const [key,value] of object) {
    console.log(key,':-', value);
    
//}

