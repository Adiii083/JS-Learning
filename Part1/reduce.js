const myNums=[1,2,3]

const myTotal=myNums.reduce(function(acc,currval){
    return acc+currval
},0)   // accumulator is initialized with 0; 
console.log(myTotal);

// alternative way
const totalSum=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(totalSum);
