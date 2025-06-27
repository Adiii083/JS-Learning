if(true)
{
    let a=10;
    const b=20;
    var c=50;
}
// console.log(a); // This will throw an error because 'a' is not defined outside the block
// console.log(b); // This will throw an error because 'b' is not defined outside the block
// console.log(c); // This will log 50 because 'c' is defined with var and is hoisted to the function scope

function one(){
    const username="Aditya"
    function two(){
        const website="youtube";
        console.log(username);
    }
    two();
}
one();


// different ways to declare function

console.log(addOne(4)); // This will log 5
function addOne(num)
{
    return num+1;
}
console.log(addOne(4)); // This will log 5


// problem yaha aa rha hai
console.log(addTwo(4)); // This will give an error because addTwo is not defined yet
const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(4)); // This will log 6