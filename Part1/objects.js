// Singelton

// Object literals

const mySym=Symbol("key");
const JsUser={
    name: "Aditya",
    age: 25,
    [mySym]: "key",
    location: "Assam",
    email: "adkr083@gmail.com",
}
console.log(JsUser.name); //Aditya
console.log(JsUser["name"]) // Aditya 
console.log(JsUser.age); //25
// console.log(JsUser[age]); // This will throw an error because age is not defined as a variable
console.log(JsUser["age"]); //25

console.log(JsUser[mySym]); //key

JsUser.email="adkr084@gmail.com"; // Update email
console.log(JsUser.email); //adkr084@gmail.com
Object.freeze(JsUser); // Freeze the object, no further changes allowed