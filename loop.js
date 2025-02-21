// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }

// let num={
//   name:"kajal",
//   'age':24
// }
// for(let key in num){
//   console.log(num[key])
// }

let users = ["Alice", "Bob", "Charlie"];

users.splice(1, 1); // Remove 1 element at index 1 (Bob)

//console.log(users); 

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){ // callback fun so it has no name like function greet(val){}
   // console.log(val);
} )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

// array contains objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
  //  console.log(item.languageName);
} )
