
// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //symbol decl
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //best to use
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // symbol acess

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //used to restrict changes
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser.greeting); //[Function (anonymous)]
// console.log(JsUser.greeting());  //Hello JS user undefined
console.log(JsUser.greetingTwo());  //Hello JS user, Hitesh undefined