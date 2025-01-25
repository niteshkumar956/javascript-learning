/*

for(let i = 0 ; i < 10 ; i++){
    const element = i;
    console.log(element);
}
 
for(let i =0 ; i <= 10 ; i++ ){
    console.log(`outer loop ${i}`);
    for(let j=0 ; j<=10 ; j++){
        //console.log(`inner loop ${j}`);
        console.log( i +'*' +j + '=' + i*j );
    }
 }
    */
   let array = [1,2,3,4,5,6,7,8,9,10]
    for (let index = 0; index < array.length; index++) {
        if(index ==5){
        console.log(`detected 5`);

    }
    
 }