//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
   // var c=3
    // console.log("INNER: ", a); //10
    
}



// console.log(a); //300
// console.log(b); //error
// console.log(c); // 3(not 300 since c is overridden in if block)


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //error

   //  two() //hitesh

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //6 (hoisting)

function addone(num){
    return num + 1
}



addTwo(5) //error
const addTwo = function(num){
    return num + 2
}