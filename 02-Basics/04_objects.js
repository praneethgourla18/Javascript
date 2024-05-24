// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }  //an example for nested objects

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //assign method is used to add elemts separetly

// const obj3 = {...obj1, ...obj2} same like array spread operator
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// console.log(users[0].email)
// // console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //returns arr of keys
// console.log(Object.values(tinderUser)); //returns arr of values
// console.log(Object.entries(tinderUser)); //returns arr of key value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //returns whether the object has the specified property or not 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(courseInstructor); //returns error so you have to define the obj before using it.
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

