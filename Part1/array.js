const marvel_heros=["ironman","spiderman","thor"];
const dc_heros=["batman","superman","flash"];
// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros);
// console.log(marvel_heros);

// above methods are not working like c++  
// as it treats array as a single element

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// Use of spread operator to merge arrays
// const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);

// Flattening the array using flat method
// const another_array=[1,2,3,4,[5,6,7],[8,9,[10,11]]];
// const real_array=another_array.flat(2);
// console.log(real_array);


console.log(Array.isArray("Aditya")); // false
console.log(Array.from("Aditya")); // ['A', 'd', 'i', 't', 'y', 'a']
console.log(Array.from({name:"aditya"}));  // interesting


let score1=300;
let score2=400;
let score3=500;

console.log(Array.of(score1,score2,score3));

