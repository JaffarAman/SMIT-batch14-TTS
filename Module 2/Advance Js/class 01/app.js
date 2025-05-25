// var
// let
// const



// var userName = "jaffar"
// userName = "jaffar aman"



// var userName = "sufiyan"
// console.log("userName", userName)



// let userName = "jaffar"
// userName = "Jaffar Aman"


// let userName = "Sufiyan"
// console.log("userName", userName)


// const cnic = 123456
// cnic = 5465465 


// scopes
// Global scope

// function scope , var
// Block scope  ,  let or const


// let userName = "Jaffar"


// function foo() {
//     var userName = "Jaffar" 
// }

// var num1 = 100

// if (true) {
//     let num1 = 200
// }

// console.log(num1, "num1")

// var user;
// var age;
// foo




// console.log(user)
// let user = "jaffar"
// var age = "jaffar"


// function foo(){
//     var name = "smit"
// }


// string

// ${}
// var result = 2+2+2
// var str = `addition: ${result}`
// console.log("str", str)





// const stdObj = {
//     name: "Jaffar",
//     age: 24,
//     id: 100,
//     isActive: true
// }

// const { name, age, id, isActive } = stdObj


// document.writeln(`<h1>Name : ${userName} </h1> <br /> `)
// document.writeln(`<h1>age : ${age} </h1> <br /> `)
// document.writeln(`<h1>id : ${id} </h1> <br /> `)
// document.writeln(`<h1>isActive : ${isActive} </h1> <br /> `)






// const userName = "sufiyan bhai"

// const stdObj = {
//     userName: "Jaffar Aman"
// }

// const { userName: user } = stdObj



// console.log(user)

// Array Destr
const std = ["john", 23, "male"]
// const [userName, age, gender] = std
// const [a, b, c] = std
// const [name, ,, gender] = std
const [, age , gender] = std
console.log(age)
console.log(gender)

// console.log(std[0])
// console.log(std[1])
// console.log(std[2])


