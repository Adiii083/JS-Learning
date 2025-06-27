function SayMyName()
{
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}
// SayMyName();

function addTwoNumbers(number1,number2)
{
    console.log(number1+number2);
}
// addTwoNumbers(3,4);
// const result= addTwoNumbers(3,4);
// console.log(result); // This will log 'undefined' because the function does not return a value

function loginUserMessage(Username)
{
    return `${Username} has logged in successfully!`;
}
// loginUserMessage("Aditya");
// console.log(loginUserMessage("Aditya"));


function calculateCartPrice(...val){
    return val;
}
// console.log(calculateCartPrice(100, 2, 10)); 

function calculateCartPrice1(num1,num2,...val){
    return val;
}
// console.log(calculateCartPrice1(100, 2, 10)); 



//Using object in function
 const user={
    username:"Aditya",
    price:"299"
 }

 function handleObject(anyobject)
 {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 handleObject(user);


//  alternative way to use object in function
handleObject({
    username:"Shyam",
    price:"300"
})

// working with arrays in function
const myNewArray=[200,400,600];

function returnSecondElement(getarray)
{
    return getarray[1];
}
console.log(returnSecondElement(myNewArray)); // This will log 400
console.log(returnSecondElement([100,200,300])); // This will log 200

