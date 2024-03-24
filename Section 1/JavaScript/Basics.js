//Set-Up Javascript----
// Firstly you have installed Node.js---

// using cd command to enter in the directory---
// for running code--- node filename.js


// node --watch filename.js-- for simulatneously running---

//----------

   ///Some Basics Concepts of JavaScript are---
   //-Printing Output..
   //-Variables--
   //Keywords and Identifiers-'''
   //-Data Types...
   //-Opertaors---
   //-Coditional statements--
   //-Looping--
   //-Functions***
   //-etc


//-------
console.log("Start JavaScript Language-----")
console.log("  ")
console.log("Hello Duniya!!!!")
console.log("Shahe Alam.. ")
console.log("This is my first Js Code...")
console.log("JavaScript.....")
console.log("Toh kaise hain AAP LOG!!!!")
console.log("Framework.....")

// START SERVER AND CODE RUN DEFAULT node -- watch Filename

console.log("------")

//Types Of Variables---3 types
//1-var
//2-let 
//3-const

// VARIABLES...... = Container 
//let used Most--

var name="Shahe Alam"
console.log(name)

let age=21
console.log(age)

//Differences between 'let' and 'const'

let city="Barabanki"//declaration
console.log(city)

city="Lucknow" //reassignment
console.log(city)

const country="India"
console.log(country)

//country="Pakistan"
//console.log(country)
//Errors 

//Difference between"var" and "let"

var a=10,b=20,c
c=a+b
console.log(c)

//redeclaration and reassigning both are possible

var a=10
console.log(a)
var a=20 //redeclaration
console.log(a)
a=30
console.log(a)

// In "let---"

let d=20
//redeclaration is not possible
//let b=10

d=30
console.log(d)



//String Concatenation---


let firstname="Aloneboy"
let lastname=" ShaheAlam"
let fullname=firstname +" " + lastname
console.log(fullname)

// VARIABLE EXAMPLE---

var bs=50000
hra=(10/100)*bs
da=(5/100)*bs

console.log("Basic Salary=",bs)

console.log("Human Resources allowance=",hra)
console.log("Dearness allowance",da)
var gross=bs+hra+da
console.log("Gross Salary=",gross)
