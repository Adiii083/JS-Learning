//  const chai=function(){
//     let username="Aditya";
//     console.log(this.username); // This will log 'undefined' because 'this' does not refer to the function's scope
//  }
//     chai(); // This will log 'undefined'


const chat=()=>{
let username="Aditya";
console.log(this.username); // This will log 'undefined' because arrow functions do not have their own 'this'
}
// chat(); // This will log 'undefined'




// const addTwo=(num1, num2)=>{
//     return num1+nums2;
// }
// console.log(addTwo(3,4)); // This will log 7
//

// alternative way to write the addTwo function using arrow function syntax
const addTwo=(num1, num2)=>num1+num2;
// console.log(addTwo(3,4)) // This will log 7

// Note: curly bracket ke saath return likhna pdega
// curly bracket ke bina return nahi likhna pdega

