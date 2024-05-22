/*
 The datatypes are categorised into two types based on the data access and storing
 They are
 1) Primitive 
 2) Non-Primitive(reference)
*/

// primitive 

// 7 Types :  String , Number , Boolean , Null , Undefined , Symbol ,BigInt 
     
//symbol dtype is used for unique number denotion and it returns a unique symbol value

const id=Symbol(123);
const id2=Symbol(123);

console.log(id == id2); //returns false as each ids have unique value

// Reference (Non-primitive)

// Array , Objects , 

const heroes = ["shaktiman" , "nagraj" ,"doga"] //array

let myObj = {
    name : "praneeth",
    age: 22
} //object => contains key value pairs

const myFunction = function(){
    console.log("hello world");
} //function

//we can use typeof func to find the type of variables 

console.log(typeof myFunction) //returns function
console.log(typeof heroes) //returns obj
console.log(typeof myObj) //returns obj

//In js arrays are indeed objects with special behaviours

//**** Js is dynamically typed lang because we dont need to define the datatype of variables unlike in java and c such as int float etc.,

let a=20;
//thats it

