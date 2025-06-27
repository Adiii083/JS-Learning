let name="aditya"
let lastName="kumar"

// this is less preferred
console.log(name + lastName);


// this is mostly preferred
console.log(`my name is${" aditya"} height is ${ 6}`) 


const gameName= new String('Aditya')
console.log(gameName);

console.log(gameName[0])
console.log(gameName.toUpperCase())
console.log(gameName.indexOf("d"))
console.log(gameName.charAt(5))
console.log(gameName.slice(0, 3)) //
console.log(gameName.substring(-1,2)) // "ity"


const newString="   aditya   "
console.log(newString)
console.log(newString.trim()) // "aditya"
console.log(newString.trimStart()) // "aditya   "
console.log(newString.trimEnd()) // "   aditya"
console.log(newString.replace("aditya", "kumar")) // "   kumar   "
console.log(newString.includes("ad")) // true


let str1="aditya-govind-college"
console.log(str1.split("-")) // ["aditya", "govind", "college"]
