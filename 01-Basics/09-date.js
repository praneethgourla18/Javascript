 
 let myDate = new Date();

//  console.log(myDate.toString());
// //  console.log(myDate.toISOString());
//  console.log(myDate.toJSON());
//  console.log(myDate.toDateString());
//  console.log(myDate.toTimeString());
//  console.log(myDate.toLocaleString());

//  console.log(typeof myDate)  //gives obj as output

//the above methods are different types of printing date in js


let myCreatedDate = new Date(2023,11,23)

console.log(myCreatedDate.toLocaleString())

//here i given month as 0 and the output will be jan this is due to months in js will be starting from 0

//if you give 12 it will again gets redirected to jan

//but when you write in format of "mm-dd-yyyy or such" the months are asusual starts from 1

let myCreatedDate2 = new Date("2023-01-14");

console.log(myCreatedDate2.toLocaleString());




