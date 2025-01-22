 const Marvel_Heros = ["spiderman", "Ironman", "thor"]
 const Dc_Heros = ["Superman", "Flash" , "Batman"]
 //Marvel_Heros.push(Dc_Heros)
 console.log(Marvel_Heros)

 const AllHeros = Marvel_Heros.concat(Dc_Heros)
 console.log(AllHeros)

 const allnewheros = [...Marvel_Heros, ...Dc_Heros]
 console.log(allnewheros)
/*
 const newArray = [1,23,4,[2,3,4],45,56,[6,56,[2,4,3]]]
 console.log("A",newArray.flat(2))

 const newArray2 = [1,23,4,[2,3,4],45,56,[6,56,[2,4,3,[1,2,3]]]]
 console.log("B",newArray2.flat(2))

 const newArray3 = [1,23,4,[2,3,4],45,56,[6,56,[2,4,3,[1,2,3]]]]
 console.log("C",newArray3.flat(Infinity))
 */
console.log(Array.isArray("Nitesh"))
console.log(Array.from("Nitesh"))
console.log(Array.from({name :"Nitesh"}))