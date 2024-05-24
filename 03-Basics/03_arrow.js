// // const user = {
// //     username: "hitesh",
// //     price: 999,

// //     welcomeMessage: function() {
// //         console.log(`${this.username} , welcome to website`);
    
// //         console.log(this);  //this will return the object . If we do console.log(this) from another function nested in welcomeMesage that will return the window!!
      
// //     }

// // }

// // // user.welcomeMessage()
// // user.username = "sam"
// // user.welcomeMessage()

// console.log(this); //here it refers to a global object in node js environment and window object in browser environment !!

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //returns global object as the function is in non strict mode !! and the op is here is {} and undefined. 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
  
const chai =  () => {
    let username = "hitesh"
    console.log(this)
}


chai()

// // const addTwo = (num1, num2) => {
// //     return num1 + num2
// // }

// // const addTwo = (num1, num2) =>  num1 + num2

// // const addTwo = (num1, num2) => ( num1 + num2 )

// // const addTwo = (num1, num2) => ({username: "hitesh"})


// // console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach(function(val){
    console.log(val);
})