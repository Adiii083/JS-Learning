// for of
const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num) // This will log each number in the array
}

const greeting="Hello world!"
for(const greet of greeting){
    console.log(`each char is ${greet}`); // This will log each character in the string
}




// for Each loop
const coding=["js","python","java","c++"];

// coding.forEach(function(val){
//     console.log(val);
// })

// alternate
// coding.forEach((val)=>{
//     console.log(val)
// })

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


const myCoding=[
    {
        language:"javascript",
        languagaeFileName:"js"
    },
    {
         language:"python",
        languagaeFileName:"py"
    },
    {
         language:"Java",
        languagaeFileName:"js"
    }
]

// myCoding.forEach((item)=>{
//     console.log(item.languagaeFileName)
// })

// const values= coding.forEach((item)=>{
//     console.log(item)
// })
// console.log(values)

const myNums=[1,2,3,4,5,6];
const ans=myNums.filter((nums)=>(nums>3))
console.log(ans);