// const tinderUser=new Object();
// console.log(tinderUser) // {} - empty object

const tinderUser={}
tinderUser.name = "Aditya"
tinderUser.age = 25
tinderUser.isLoggedIn = true

// console.log(tinderUser)   // { name: 'Aditya', age: 25, isLoggedIn: true }


const regilarUser={
    email:"adkr083@gmail.com",
    fullname: {
        firstName: "Aditya",
        lastName: "Kumar"
    }
}
// console.log(regilarUser.fullname.firstName) // Aditya
// console.log(regilarUser.email) // adkr083@gmail.com


// combining objects
const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

// const obj3=Object.assign({}, obj1, obj2);
// console.log(obj3); // {1: "a", 2: "b", 3: "c", 4: "d"}
// const obj4={...obj1,...obj2};  // commonly used 
// console.log(obj4); // {1: "a", 2: "b", 3: "c", 4: "d"}


// more operation on tinderUser
// console.log(tinderUser); // { name: 'Aditya', age: 25, isLoggedIn: true }
// // print its keys
// // its gives an array of keys
// console.log(Object.keys(tinderUser)); // ['name', 'age', 'isLoggedIn']
// // print its values
// console.log(Object.values(tinderUser)); // ['Aditya', 25, true]
// console.log(Object.entries(tinderUser)); // [['name', 'Aditya'], ['age', 25], ['isLoggedIn', true]
// // to check any property
// console.log(tinderUser.hasOwnProperty("name")); // true

const course={
   coursename:"JavaScript",
    price: 199,
    courseInstructor:"Aditya"
}
// technique to destructure objects
const{courseInstructor}=course;
console.log(courseInstructor); // Aditya
// alternative way to print values
const {courseInstructor:instructor_name}=course
console.log(instructor_name); // Aditya
