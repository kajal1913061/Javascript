const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage()
// output
//hitesh , welcome to website
// {
//     username: 'hitesh',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }


// user.username = "sam"
// user.welcomeMessage()
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

//console.log(this); // {} (in browser console ,output is window object with prototypes)


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//undefined cant use this in function
// }
// chai() 

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  
// }

// Array function
const chai =  () => {
    let username = "hitesh"
    console.log(this.username); //undefined
    console.log(this); //{}
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return 

const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo(2,4))

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()