

// stackMemory ->Primitives

// HeapMemory ->Reference

let name1="hitesh"
let name2=name1

name2="praneeth"
console.log(name1)
console.log(name2)

//primitives are stored in stack memory and only the copy of data will be provided original will not be changed but the scene is different in heap memory which stores the reference variables.

let user1= {
    name:"praneeth" ,
    email:"praneeth@email.com"
}

let user2=user1
console.log(user2.email);

user2.email="praneeth@google.com";
console.log(user1.email);
console.log(user2.email);

//here the original data is modified.As the reference is provided for the second variable not the copy..

//reference dtypes are stored in heap memory and the primitives are stored in stack mem.