// console.log("Heloo This is External JS file")

// console.error("Error Show")
// console.warn("Warning")

// document.write("Hello Dheeeraj")

// //  VAriables : variables is used to store our data 

// //  create a variable

// x = 10 

// // 1 = 20 

// //  name + number 
// x10 = 20
// // name
// dheeraj = 20
// //  underscrore
// _x = 10
// X = 20
// //  Camel Case 
// dheerajKumar = 100
// //  Pascal case 
// DheerajKumarSingh = 200

// console.log(x)
// console.log(X)

// //  Keywords 

// //  Let , Var , Const

// let y = 10

// // let y = 20 
// console.log("y is ",y)
// x = 30
// console.log(x)

// y = 100 
// console.log("y is reassign",y)

// {
//     let bl = 10
//     console.log("bl is ",bl)
// }



// //  VAr 

// var c = 10 
// var c = 20 

// {
//     var cd = 10
// }
// console.log("cd is",cd)


// //  const 
// const d = 30
// // d = 100
// {
//     const dd = 100
// }
// console.log(dd)




//  Data types 
// 1. Primitive Data types :- Store single values 
// a. Number : interger value
// b. String : String are used to store character values 
// c. null : null is a single pass value
// d. undefined : not a value assign to a variable 
// e. boolean : true and false 


// 2. Non -primitive Data types : store multiple values
// a. object : which is store data into key and values 
// b. array  : which is used to store multiple values 

// x = 10

// y = "Heloo Dheeraj"

// y = 'Heloo Dheeraj'

// x = null
// console.log(x)

// let z;
// console.log(z)

// let bl = true
// let bli2 = false

// //  Syntax of array 
// let arr = [1, 1, 3, "Heloo", null, false, undefined]

// console.log(arr)
// console.log(arr[3])

// //  Sntax of object 

// let obj = {
//     name: "dherraj",
//     age: 23,
//     height : 5.7
// }

// console.log(obj)
// console.log(obj.age)



// Operators

// 1. Arithmetic Opertaors 

// + : add 
// - : subtract
// * : multiple
// / :  divide 
// %  : modulus (remainder)
// ** : exponentation (power)


// 2. Assignment Opertaors

//  = : assignment 
// += : add equal to 
//  -= 
//  *=
//  %=
//  **=


// let x = 10
// let y = 20
// let z = x + y
// console.log(z)


// let num1 = 10
// let num2 = 3

// console.log("remainder", num1 % num2)

// let num3 = 5
// console.log("power", num2 ** num3)


// let add = 10
// let newadd = add + 20

// console.log(add)

// let newadd1 = add += 20

// console.log("after assigmnet", add)



// // 3 . Comparision Operators

// //  == : value check of our variables 
// //  != Vice -versa 
// //  === : value and type check 
// //  !== : vice versa 
// //  > : greater than 
// // < : less than 
// // >= geater than equal to 
// // <= less than equal to 

// let cp = 10
// let cp1 = 20
// let cp2 = "20"


// console.log(cp == cp1)
// console.log(cp2 == cp1)
// console.log(cp2 != cp1)
// console.log(cp2 === cp1)
// console.log(cp2 !== cp1)


// let b = 20
// let a = 20

// console.log(a >= b)


// //  Logical Operators 
// // and && 
// // or || 
// // not ! 


// // and 
// // true && true = true 
// // true && false = false 
// // false && true = false 
// // false && false = false 


// // or 
// // true && true = true 
// // true && false = true 
// // false && true = true 
// // false && false = false 

// // not :- Vice versa 



// let lg = 10 
// let lg1 = 20 
// let lg2 = 20 

// let c = !(lg == lg1) && (lg1 === lg2)
// console.log("and",c)

// let d = (lg == lg1) || (lg1 === lg2)
// console.log("or",d)



//  Statements :- it is a block of code which is executed when our condition is true .

//  Syntax :- 

// if (condition){
//     // code to be exceuted
// }
// else if(condition 2){
//     // code to be exceuted
// }
// else{

// }


// let x = 30

// if (x < 20) {
//     console.log("x is small than 20", x)
// }
// else {
//     console.log("x is greater than 20", x)
// }



// let age = 18

// if (age < 18) {
//     console.log("Not adult")
// }
// else if (age >= 18) {
//     console.log("teenager")
// }


// //  weeek 
// // parseInt :- which is change string into integer

// let week = parseInt(prompt("Enter a number"))


// if (week == 1) {
//     console.log("Monday")
// }
// else if (week === 2) {
//     console.log("Tuesday")
// }
// else if (week == 3) {
//     console.log("wednesday")
// }
// else if (week == 4) {
//     console.log("Thursday")
// }
// else if (week == 5) {
//     console.log("Friday")
// }
// else if (week == 6) {
//     console.log("Saturday")
// }
// else if (week == 7) {
//     console.log("Sunady")
// }
// else {
//     console.log("Something wrong")
// }


// //  Loops :- it is a block of code which is run as well as our condition is true.
// // 1. initialise 
// // 2. condition 
// // 3. increment / decrement 

// //  While loop 

// let y = 30

// while (y <= 20) {
//     console.log("heloo my number is", y)
//     y++
// }


// // do while 
// let z = 1
// do {
//     console.log(z)
//     z++
// } while (z > 10)


// //  for loop 

// for (let a = 1; a < 20; a++) {
//     console.log(a)
// }




//  Array :- Which is used to store multiple values.

let arr = [12,24,5,7,8,90,3,4,5,6,7,8]

// Array works on index number 0,1,2,3,4,5

// Access the value of our array 

console.log(arr[0])

console.log(arr)

console.log(arr.length)


// Pop :- which is used to remove last value of our array
// push :which is used to add last value of our array

arr.pop()
arr.pop()
console.log(arr)
arr.push(false)
console.log(arr)


// shift :-which is used to remove first value of our array
// unshift :- which is used to add first value of our array


// slice :- return a new array
let arr1 = arr.slice(3,8)
console.log(arr1)

// splice :- 
// 1. index number 
// 2. remove items 
// 3. values
arr.splice(2,0,"dheeraj")
console.log(arr)

arr.splice(3,2,"kumar",null)
console.log(arr)


// conacat

let arr2 = [1,2,4,5,6,6,7,9]
let arr3 = [11,12,13,14,15]

let con = arr3.concat(arr2,arr1)
console.log(con)

// delete
delete arr2[0]
console.log("arr2",arr2)

// reverse 
arr.reverse()
console.log(arr)

// sort :- 

let st = ["wh","ab","uv","xy"]
st.sort()
console.log(st)